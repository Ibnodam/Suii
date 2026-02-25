import line from './pics/roadmap/line.png';

const steps = [
  {
    step: 'STEP 1',
    title: 'Off-Site SEO Analysis',
    text: 'Aliquam turpis viverra quam sit interdum blandit posuere pellentesque.',
    side: 'right',
  },
  {
    step: 'STEP 2',
    title: 'Technical SEO Optimizations',
    text: 'Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus.',
    side: 'left',
  },
  {
    step: 'STEP 3',
    title: 'Usability Check',
    text: 'Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis.',
    side: 'right',
  },
  {
    step: 'STEP 4',
    title: 'Content Marketing',
    text: 'Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada.',
    side: 'left',
  },
];

export default function Roadmap() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-20">
          That’s how it works
        </h2>

        <div className="relative grid grid-cols-[1fr_80px_1fr] gap-y-24">
          {/* LINE */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full">
            <img src={line} alt="line" className="h-full mx-auto" />
          </div>

          {steps.map((item, index) => (
            <div key={index} className="contents">
              {/* LEFT */}
              <div className="flex justify-end">
                {item.side === 'left' && (
                  <div className="max-w-sm text-right">
                    <span className="text-xs font-semibold text-indigo-500">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 mt-3">
                      {item.text}
                    </p>
                  </div>
                )}
              </div>

              {/* DOT */}
              <div className="relative flex justify-center">
                <span className="w-3 h-3 rounded-full bg-indigo-500 z-10 mt-2"></span>
              </div>

              {/* RIGHT */}
              <div className="flex justify-start">
                {item.side === 'right' && (
                  <div className="max-w-sm">
                    <span className="text-xs font-semibold text-indigo-500">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 mt-3">
                      {item.text}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



// import line from './pics/roadmap/line.png'

// export default function Roadmap() {}