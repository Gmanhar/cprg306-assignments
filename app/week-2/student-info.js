import Link from "next/link";

export default function StudentInfo() {
  const linkStyles = "hover:underline";

  return (
    <div>
      <p>Gurman Harika</p>
      <Link
        className={linkStyles}
        href="https://github.com/Gmanhar/cprg306-assignments"
      >
        https://github.com
      </Link>
    </div>
  );
}
