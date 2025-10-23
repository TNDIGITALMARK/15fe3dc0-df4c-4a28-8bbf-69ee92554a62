export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="mb-6">Vercel Deployment Test</h1>
        <p className="text-lg">
          This page tests the background Vercel deployment system. The Phoenix Agent has implemented
          this simple component to verify that code changes are automatically built, validated, and
          deployed through the integrated pipeline.
        </p>
        <div className="mt-10 p-6 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            If you're seeing this page, the deployment system is working correctly.
          </p>
        </div>
      </div>
    </div>
  );
}
