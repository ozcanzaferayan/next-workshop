import Link from "next/link";

const page = () => {
  return (
    <>
      <ul>
        <li>
          <Link href={"/pokemons"}>Pokemons</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
      </ul>
    </>
  );
};

export default page;
