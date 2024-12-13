import QuizGrid from './components/QuizGrid';
import HomeHeaderServer from './components/HomeHeaderServer';

interface QuizStatus {
  completed: boolean;
  score: number;
  selections: number[];
  submissionDate: string;
}

export default function Home() {
  return (
    <div className="flex flex-col items-center py-10">
      <HomeHeaderServer />
      <QuizGrid />
    </div>
  );
}
