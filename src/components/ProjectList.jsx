

export default function ProjectList({ id, title, active, setSelected }) {
  return (
    <li
       className={`py-2 cursor-pointer transition-all duration-300 ${
    active ? "text-white border-b-2 border-white" : "text-gray-400"
  }`}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}