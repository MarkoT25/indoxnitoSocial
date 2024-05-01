import MessagesCard from "@/components/MessagesCard";
import Navigation from "@/components/Navigation";
import NewPost from "@/components/NewPost";
import NotificationsCard from "@/components/NotificationsCard";
import Post from "@/components/Post";
import ProfileCard from "@/components/ProfileCard";
import UserStory from "@/components/UserStory";

export default function Home() {
  return (
    <main className="p-4 flex justify-center items-center w-screen mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full">
        <div className="col-span-1 space-y-5 hidden lg:block">
          <ProfileCard />
          <Navigation />
        </div>
        <div className="col-span-2">
          <UserStory />
          <NewPost /> 
          <Post />
        </div>
        <div className="col-span-1 space-y-5 hidden 2xl:block">
          <MessagesCard />
          <NotificationsCard />
        </div>
      </div>
    </main>
  );
}