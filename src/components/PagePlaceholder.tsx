import { Layout } from "@/components/Layout";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PagePlaceholderProps {
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function PagePlaceholder({
  title,
  description,
  icon: Icon = FileText,
}: PagePlaceholderProps) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-6 rounded-2xl">
              <Icon className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">{title}</h1>
          <p className="text-muted-foreground mb-8">
            {description ||
              `The ${title.toLowerCase()} page is coming soon. Continue prompting to fill in the content for this page.`}
          </p>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Ready to build this page? Let the AI know what you'd like to see here.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
