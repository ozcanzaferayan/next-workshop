import { auth } from "@/auth";

const AdminPage = async () => {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;

  return <h1>Secret page</h1>;
};

export default AdminPage;
