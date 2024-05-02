import MessagesCard from "@/components/MessagesCard";
import Navigation from "@/components/Navigation";
import NewPost from "@/components/NewPost";
import NotificationsCard from "@/components/NotificationsCard";
import Post from "@/components/Post";
import ProfileCard from "@/components/ProfileCard";
import UserStory from "@/components/UserStory";

export default function Home() {
  return (
    <main className="p-4">
      <div className="flex flex-row gap-4 justify-center">
        <div className="flex flex-col space-y-5">
          <ProfileCard />
          <Navigation />
        </div>
        <div className="flex flex-col items-center space-y-5">
          <UserStory />
          <NewPost />
          <Post />
        </div>
        <div className="flex flex-col space-y-5">
          <MessagesCard />
          <NotificationsCard />
        </div>
      </div>
    </main>
  );
}
