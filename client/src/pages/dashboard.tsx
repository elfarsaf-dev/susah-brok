import { useQuery, useMutation } from "@tanstack/react-query";
import { News, Tips } from "@shared/schema";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Trash2 } from "lucide-react";

export default function Dashboard() {
  const { toast } = useToast();
  const { data: news, isLoading: newsLoading } = useQuery<News[]>({ queryKey: ["/api/news"] });
  const { data: tips, isLoading: tipsLoading } = useQuery<Tips[]>({ queryKey: ["/api/tips"] });

  const newsMutation = useMutation({
    mutationFn: async (data: News) => {
      await apiRequest("POST", "/api/news", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/news"] });
      toast({ title: "Success", description: "News updated" });
    }
  });

  const tipsMutation = useMutation({
    mutationFn: async (data: Tips) => {
      await apiRequest("POST", "/api/tips", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/tips"] });
      toast({ title: "Success", description: "Tips updated" });
    }
  });

  const newsForm = useForm<News>({
    defaultValues: { id: crypto.randomUUID(), title: "", content: "", date: new Date().toISOString(), image: "", category: "News" }
  });

  const tipsForm = useForm<Tips>({
    defaultValues: { id: crypto.randomUUID(), title: "", content: "", image: "" }
  });

  if (newsLoading || tipsLoading) return <div className="flex items-center justify-center h-screen"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Content Dashboard</h1>
      
      <Card>
        <CardHeader><CardTitle>Add News Item</CardTitle></CardHeader>
        <CardContent>
          <Form {...newsForm}>
            <form onSubmit={newsForm.handleSubmit(d => newsMutation.mutate(d))} className="space-y-4">
              <FormField control={newsForm.control} name="title" render={({field}) => (
                <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
              )} />
              <FormField control={newsForm.control} name="content" render={({field}) => (
                <FormItem><FormLabel>Content</FormLabel><FormControl><Textarea {...field} /></FormControl></FormItem>
              )} />
              <Button type="submit" disabled={newsMutation.isPending} className="w-full">
                {newsMutation.isPending && <Loader2 className="mr-2 animate-spin" />} Add News
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Add Tips Item</CardTitle></CardHeader>
        <CardContent>
          <Form {...tipsForm}>
            <form onSubmit={tipsForm.handleSubmit(d => tipsMutation.mutate(d))} className="space-y-4">
              <FormField control={tipsForm.control} name="title" render={({field}) => (
                <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
              )} />
              <FormField control={tipsForm.control} name="content" render={({field}) => (
                <FormItem><FormLabel>Content</FormLabel><FormControl><Textarea {...field} /></FormControl></FormItem>
              )} />
              <Button type="submit" disabled={tipsMutation.isPending} className="w-full">
                {tipsMutation.isPending && <Loader2 className="mr-2 animate-spin" />} Add Tip
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Current News</h2>
          {news?.map(item => (
            <Card key={item.id}><CardHeader><CardTitle className="text-sm">{item.title}</CardTitle></CardHeader></Card>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Current Tips</h2>
          {tips?.map(item => (
            <Card key={item.id}><CardHeader><CardTitle className="text-sm">{item.title}</CardTitle></CardHeader></Card>
          ))}
        </div>
      </div>
    </div>
  );
}
