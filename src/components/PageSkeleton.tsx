import { Skeleton } from "@/components/ui/skeleton";

type Variant = "home" | "case-study";

const PageSkeleton = ({ variant = "case-study" }: { variant?: Variant }) => (
  <div role="status" aria-label="Loading page" className="min-h-screen bg-background">
    <span className="sr-only">Loading…</span>
    <header className="border-b border-border/10">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Skeleton className="h-10 w-28" />
        <div className="hidden gap-6 md:flex">
          {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-4 w-16" />)}
        </div>
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </header>

    <main className="container mx-auto px-6 py-16">
      {variant === "home" ? (
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-14 w-full max-w-xl" />
            <Skeleton className="h-14 w-4/5 max-w-lg" />
            <Skeleton className="h-4 w-full max-w-md" />
            <Skeleton className="h-4 w-3/4 max-w-sm" />
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-12 w-36" />
              <Skeleton className="h-12 w-36" />
            </div>
          </div>
          <Skeleton className="mx-auto h-56 w-56 rounded-full" />
        </div>
      ) : (
        <div className="space-y-6">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-14 w-full max-w-3xl" />
          <Skeleton className="h-4 w-full max-w-2xl" />
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-8 w-24 rounded-full" />)}
          </div>
          <Skeleton className="aspect-[16/8] w-full rounded-xl" />
        </div>
      )}

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-4 rounded-xl border border-border/10 p-5">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default PageSkeleton;
