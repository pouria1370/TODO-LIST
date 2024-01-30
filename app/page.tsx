import TodoLayout from "@/components/layout/layout";
import Index from "@/components/organisms";


export default async function Home() {

  return (
    <div>
      <TodoLayout>
        <Index/>
      </TodoLayout>
     
    </div>
  );
}
