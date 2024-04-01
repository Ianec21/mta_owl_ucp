import { User, UserRound } from "lucide-react";

const HomePage = () => {
  return (
    <main>
      <div className="flex gap-2 p-5 bg-secondary"  style={{
          borderTopRightRadius: 5
        }}>
        <UserRound/>
        <p className="text-xl font-bold">Welcome!</p>
      </div>
    </main>
  )
}

export default HomePage;