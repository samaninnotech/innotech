import Button from "@/components/common/Button";
import PageBaseLayout from "@/components/common/PageBaseLayout";

export default function NotFound() {
  return (
    <PageBaseLayout slugMapping={{}}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1>Questo Post non esiste.</h1>
        <Button href="/events" label="Torna ai Eventi"></Button>
      </div>
    </PageBaseLayout>
  );
}
