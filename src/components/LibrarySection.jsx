import AnimationCard from "./AnimationCard";
import toast from "react-hot-toast";

const LibrarySection = () => {
    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center ">
                    <h2 className="text-3xl font-bold">Motion Library</h2>
                    <p className="text-gray-500 mt-2">
                        Production-ready animations and loaders.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-9">

                    {/*  Spinner */}
                    <AnimationCard
                        title="Spinner Loader"
                        onCopy={() => {
                            navigator.clipboard.writeText(
                                `<div class="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>`
                            );
                            toast.success("Spinner copied!");
                        }}
                    >
                        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                    </AnimationCard>

                    {/*  Dots Loader */}
                    <AnimationCard
                        title="Dots Loader"
                        onCopy={() => {
                            navigator.clipboard.writeText(
                                `<div class="flex gap-2">
  <div class="w-3 h-3 bg-purple-600 rounded-full animate-bounce"></div>
  <div class="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-150"></div>
  <div class="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-300"></div>
</div>`
                            );
                            toast.success("Dots loader copied!");
                        }}
                    >
                        <div className="flex gap-2">
                            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"></div>
                            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-150"></div>
                            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-300"></div>
                        </div>
                    </AnimationCard>

                    {/*  Ring Pulse */}
                    <AnimationCard
                        title="Ring Pulse Loader"
                        onCopy={() => {
                            navigator.clipboard.writeText(
                                `<div class="relative w-12 h-12">
  <div class="absolute inset-0 rounded-full border-4 border-purple-600 animate-ping"></div>
  <div class="relative w-12 h-12 rounded-full border-4 border-purple-600"></div>
</div>`
                            );
                            toast.success("Ring pulse copied!");
                        }}
                    >
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 rounded-full border-4 border-purple-600 animate-ping"></div>
                            <div className="relative w-12 h-12 rounded-full border-4 border-purple-600"></div>
                        </div>
                    </AnimationCard>

                    {/*  Bar Wave */}
                    <AnimationCard
                        title="Bar Wave Loader"
                        onCopy={() => {
                            navigator.clipboard.writeText(
                                `<div class="flex items-end gap-1 h-10">
  <div class="w-2 bg-purple-600 animate-bounce h-4"></div>
  <div class="w-2 bg-purple-600 animate-bounce delay-150 h-6"></div>
  <div class="w-2 bg-purple-600 animate-bounce delay-300 h-8"></div>
  <div class="w-2 bg-purple-600 animate-bounce delay-150 h-6"></div>
  <div class="w-2 bg-purple-600 animate-bounce h-4"></div>
</div>`
                            );
                            toast.success("Bar wave copied!");
                        }}
                    >
                        <div className="flex items-end gap-1 h-10">
                            <div className="w-2 bg-purple-600 animate-bounce h-4"></div>
                            <div className="w-2 bg-purple-600 animate-bounce delay-150 h-6"></div>
                            <div className="w-2 bg-purple-600 animate-bounce delay-300 h-8"></div>
                            <div className="w-2 bg-purple-600 animate-bounce delay-150 h-6"></div>
                            <div className="w-2 bg-purple-600 animate-bounce h-4"></div>
                        </div>
                    </AnimationCard>

                    {/*  Glow Hover Button */}
                    <AnimationCard
                        title="Glow Hover Button"
                        onCopy={() => {
                            navigator.clipboard.writeText(
                                `<button class="px-5 py-2 bg-purple-600 text-white rounded-md transition hover:shadow-[0_0_20px_rgba(139,92,246,0.7)]">
  Hover Me
</button>`
                            );
                            toast.success("Glow button copied!");
                        }}
                    >
                        <button className="px-5 py-2 bg-purple-600 text-white rounded-md transition hover:shadow-[0_0_20px_rgba(139,92,246,0.7)]">
                            Hover Me
                        </button>
                    </AnimationCard>

                    {/*  Typewriter */}
                    <AnimationCard
                        title="Typewriter Text"
                        onCopy={() => {
                            navigator.clipboard.writeText(
                                `/* Add this CSS */

@keyframes typing {
  0%   { width: 0 }
  40%  { width: 100% }
  60%  { width: 100% }
  100% { width: 0 }
}

@keyframes blink {
  0%, 100% { border-color: transparent }
  50% { border-color: #7c3aed }
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #7c3aed;
  display: inline-block;
  animation: typing 5s steps(30, end) infinite,
             blink 1s step-end infinite;
}

/* HTML */

<div class="typewriter text-lg font-semibold text-purple-600">
  FlowMotion brings your UI to life.
</div>
`
                            );
                            toast.success("Typewriter copied!");
                        }}
                    >
                        <div className="typewriter text-lg font-semibold text-purple-600">
                            FlowMotion brings your UI to life.
                        </div>
                    </AnimationCard>

                </div>
            </div>
        </section>
    );
};

export default LibrarySection;
