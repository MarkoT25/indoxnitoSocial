import Navigation from "@/components/Navigation";
import NewPost from "@/components/NewPost";
import Post from "@/components/Post";
import ProfileCard from "@/components/ProfileCard";
import UserStory from "@/components/UserStory";

export default function Home() {
  return (
    <main className="flex  justify-between min-h-screen p-4">
      <div className="grid grid-cols-4 gap-4 mx-auto">
        <div className="col-span-1 space-y-5">
          <ProfileCard />
          <Navigation />
        </div>
        <div className="col-span-2">
          <UserStory />
          <NewPost /> 
          <Post />
        </div>
        <div className="col-span-1">hello3</div>
      </div>
    </main>
  );
}