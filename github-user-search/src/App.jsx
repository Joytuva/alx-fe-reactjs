import { useState } from "react";
import { fetchUser } from "./services/githubApi";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchUser(username);
      setUser(data);
    } catch {
      setUser(null);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>GitHub User Search</h1>
      <SearchBar username={username} setUsername={setUsername} onSearch={handleSearch} />
      <UserCard user={user} />
    </div>
  );
}

export default App;
