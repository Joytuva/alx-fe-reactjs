function UserCard({ user }) {
  if (!user) return null;

  return (
    <div style={{ marginTop: "1rem" }}>
      <img src={user.avatar_url} alt={user.login} width="100" />
      <h2>{user.name || user.login}</h2>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View Profile
      </a>
    </div>
  );
}

export default UserCard;
