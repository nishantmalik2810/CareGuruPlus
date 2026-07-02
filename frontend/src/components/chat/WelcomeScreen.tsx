import {
  Brain,
  HeartPulse,
  Thermometer,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

interface Props {
  onPromptClick: (prompt: string) => void;
}

const prompts = [
  {
    icon: Thermometer,
    title: "Fever",
    description: "High temperature, chills or body pain",
    prompt: "I have fever for the last 2 days",
  },
  {
    icon: Brain,
    title: "Headache",
    description: "Persistent headache or migraine symptoms",
    prompt: "I have a severe headache",
  },
  {
    icon: HeartPulse,
    title: "Chest Pain",
    description: "Chest discomfort or breathing issues",
    prompt: "I have chest pain",
  },
  {
    icon: Stethoscope,
    title: "General Check",
    description: "Feeling unwell or unsure of the cause",
    prompt: "I am not feeling well",
  },
];

const greeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
};

export default function WelcomeScreen({
  onPromptClick,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-6xl py-10">

      <div className="mb-12 text-center">

        <h1 className="text-4xl font-bold text-white">
          👋 {greeting()}
        </h1>

        <p className="mt-4 text-xl text-slate-300">
          How are you feeling today?
        </p>

        <p className="mt-2 text-slate-500">
          Choose a health assessment below or describe your symptoms manually.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {prompts.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              onClick={() => onPromptClick(item.prompt)}
              className="
                group
                rounded-3xl
                border
                border-slate-700
                bg-slate-900
                p-8
                text-left
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-500
                hover:shadow-cyan-500/20
              "
            >
              <Icon
                size={34}
                className="mb-5 text-cyan-400"
              />

              <h2 className="text-2xl font-bold text-white">
                {item.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                {item.description}
              </p>

              <div className="mt-8 flex items-center gap-2 font-medium text-cyan-400">
                Start Assessment

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </button>
          );
        })}

      </div>

    </div>
  );
}