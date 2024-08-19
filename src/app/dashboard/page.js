import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GenerateFlashcards from "@/components/GenerateFlashcards";

const DashboardHome = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <section>
        <h2 className="text-2xl font-semibold">Recent</h2>
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="w-[20rem]">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                No. of All Flashcards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">30</div>
            </CardContent>
          </Card>

          <Card className="w-[20rem]">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                {" "}
                No. of Flashcards to be Viewed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">16</div>
            </CardContent>
          </Card>

          <Card className="w-[20rem]">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                No. of Flashcards Recently Viewed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Flashcards Generation */}
      <section>
        <GenerateFlashcards />
      </section>
    </div>
  );
};

export default DashboardHome;
