import { useSearchParams } from "next/navigation";

export default function Flashcard() {
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState({});

  const searchParams = useSearchParams();
  const search = searchParams.get("id");

  return <></>;
}
