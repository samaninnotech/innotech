import { Button } from "@/components/common";
import PageBaseLayout from "@/components/common/PageBaseLayout";


export default function NotFound() {
  return (
    <PageBaseLayout >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1>This page does not exist.</h1>
        <Button href="/" label="Back to Homepage"></Button>
      </div>
    </PageBaseLayout>
  );
}
