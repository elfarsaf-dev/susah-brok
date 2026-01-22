import { useQuery, useMutation } from "@tanstack/react-query";
import { News, Tips } from "@shared/schema";
import { queryClient } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Github, Lock } from "lucide-react";
import { useState } from "react";
import { Octokit } from "octokit";

export default function Dashboard() {
  const { toast } = useToast();
  const [githubToken, setGithubToken] = useState<string | null>(localStorage.getItem("github_token"));
  
  const GITHUB_OWNER = "SAFELFAR05";
  const GITHUB_REPO = "Yiv";
  const GITHUB_PATH = "components.json";

  const fetchFromGithub = async () => {
    if (!githubToken) throw new Error("No token");
    const octokit = new Octokit({ auth: githubToken });
    const { data }: any = await octokit.rest.repos.getContent({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: GITHUB_PATH,
    });
    const content = JSON.parse(atob(data.content));
    return { content, sha: data.sha };
  };

  const { data: githubData, isLoading } = useQuery({ 
    queryKey: ["github-content"],
    queryFn: fetchFromGithub,
    enabled: !!githubToken 
  });

  const news = githubData?.content?.news || [];
  const tips = githubData?.content?.tips || [];

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token = formData.get("token") as string;
    if (token) {
      localStorage.setItem("github_token", token);
      setGithubToken(token);
      toast({ title: "Logged in", description: "GitHub token saved locally" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("github_token");
    setGithubToken(null);
    toast({ title: "Logged out", description: "GitHub token removed" });
  };

  const pushMutation = useMutation({
    mutationFn: async ({ type, data }: { type: 'news' | 'tips', data: any }) => {
      if (!githubToken || !githubData) throw new Error("Missing data");
      const octokit = new Octokit({ auth: githubToken });
      
      const updatedContent = {
        ...githubData.content,
        [type]: [...(githubData.content[type] || []), data]
      };

      await octokit.rest.repos.createOrUpdateFileContents({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: GITHUB_PATH,
        message: `Add ${type}: ${data.title}`,
        content: btoa(JSON.stringify(updatedContent, null, 2)),
        sha: githubData.sha,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["github-content"] });
      toast({ title: "Success", description: "Updated on GitHub" });
    },
    onError: (error: any) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  });

  const newsForm = useForm<News>({
    defaultValues: { id: crypto.randomUUID(), title: "", content: "", date: new Date().toISOString(), image: "", category: "News" }
  });

  const tipsForm = useForm<Tips>({
    defaultValues: { id: crypto.randomUUID(), title: "", content: "", image: "" }
  });

  if (!githubToken) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-muted/50 p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Github className="w-8 h-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">Dashboard Login</CardTitle>
            <CardDescription>Enter your GitHub Personal Access Token to manage content</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    name="token" 
                    type="password" 
                    placeholder="ghp_xxxxxxxxxxxx" 
                    className="pl-10"
                    required 
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Connect GitHub
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading) return <div className="flex items-center justify-center h-screen"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="min-h-screen bg-background pb-12">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Github className="w-6 h-6" />
            <span>Content Manager (Static Mode)</span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground">
            Logout
          </Button>
        </div>
      </header>

      <div className="container max-w-5xl mx-auto p-4 md:p-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Card className="shadow-sm border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Plus className="w-5 h-5" /> Add News Item
                </CardTitle>
                <CardDescription>Direct client-side push to GitHub</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...newsForm}>
                    <form onSubmit={newsForm.handleSubmit(d => pushMutation.mutate({ type: 'news', data: d }))} className="space-y-4">
                    <FormField control={newsForm.control} name="title" render={({field}) => (
                      <FormItem><FormLabel>Title</FormLabel><FormControl><Input placeholder="News Title" {...field} /></FormControl></FormItem>
                    )} />
                    <FormField control={newsForm.control} name="author" render={({field}) => (
                      <FormItem><FormLabel>Author</FormLabel><FormControl><Input placeholder="Author Name" {...field} /></FormControl></FormItem>
                    )} />
                    <FormField control={newsForm.control} name="image" render={({field}) => (
                      <FormItem><FormLabel>Image Link (URL)</FormLabel><FormControl><Input placeholder="https://example.com/image.jpg" {...field} /></FormControl></FormItem>
                    )} />
                    <FormField control={newsForm.control} name="content" render={({field}) => (
                      <FormItem><FormLabel>Content</FormLabel><FormControl><Textarea placeholder="Write your news content here..." className="min-h-[120px]" {...field} /></FormControl></FormItem>
                    )} />
                    <Button type="submit" disabled={pushMutation.isPending} className="w-full">
                      {pushMutation.isPending ? <Loader2 className="mr-2 animate-spin" /> : <Github className="mr-2 h-4 w-4" />} 
                      Push News to GitHub
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Plus className="w-5 h-5" /> Add Tips Item
                </CardTitle>
                <CardDescription>New tip for your readers</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...tipsForm}>
                  <form onSubmit={tipsForm.handleSubmit(d => pushMutation.mutate({ type: 'tips', data: d }))} className="space-y-4">
                    <FormField control={tipsForm.control} name="title" render={({field}) => (
                      <FormItem><FormLabel>Title</FormLabel><FormControl><Input placeholder="Tip Title" {...field} /></FormControl></FormItem>
                    )} />
                    <FormField control={tipsForm.control} name="author" render={({field}) => (
                      <FormItem><FormLabel>Author</FormLabel><FormControl><Input placeholder="Author Name" {...field} /></FormControl></FormItem>
                    )} />
                    <FormField control={tipsForm.control} name="image" render={({field}) => (
                      <FormItem><FormLabel>Image Link (URL)</FormLabel><FormControl><Input placeholder="https://example.com/image.jpg" {...field} /></FormControl></FormItem>
                    )} />
                    <FormField control={tipsForm.control} name="content" render={({field}) => (
                      <FormItem><FormLabel>Content</FormLabel><FormControl><Textarea placeholder="Write your tip here..." className="min-h-[100px]" {...field} /></FormControl></FormItem>
                    )} />
                    <Button type="submit" disabled={pushMutation.isPending} className="w-full">
                      {pushMutation.isPending ? <Loader2 className="mr-2 animate-spin" /> : <Github className="mr-2 h-4 w-4" />}
                      Push Tip to GitHub
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live Content Status
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Latest News</h3>
                <div className="grid gap-3">
                  {news.length === 0 && <p className="text-sm text-muted-foreground italic">No news items found on GitHub.</p>}
                  {news.map((item: any) => (
                    <Card key={item.id} className="hover-elevate transition-all border-l-4 border-l-primary">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">{item.title}</CardTitle>
                        <CardDescription className="line-clamp-2 text-xs">{item.content}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Latest Tips</h3>
                <div className="grid gap-3">
                  {tips.length === 0 && <p className="text-sm text-muted-foreground italic">No tips found on GitHub.</p>}
                  {tips.map((item: any) => (
                    <Card key={item.id} className="hover-elevate transition-all border-l-4 border-l-blue-500">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">{item.title}</CardTitle>
                        <CardDescription className="line-clamp-2 text-xs">{item.content}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
