import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = ({ onResults }) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  // ✅ Required function
  const fetchUserData = async () => {
    const results = await searchUsers(query, location, parseInt(minRepos) || 0);
    onResults(results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex gap-2">
      <input
        type="text"
        placeholder="Search username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        c
