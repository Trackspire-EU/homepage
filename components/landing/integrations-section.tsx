"use client";

import { useEffect, useState, useRef } from "react";

const logos: Record<string, React.ReactNode> = {
  React: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.015-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.015 1.36-.034-.44.572-.895 1.095-1.36 1.565-.455-.47-.91-.993-1.36-1.565z"/>
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9969 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0187 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.0655c0-1.982.0093-3.0828.0233-3.1669.0280-.1534.1096-.2720.2205-.3327.0726-.0375.1404-.0493.5024-.0493z"/>
    </svg>
  ),
  Vue: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
    </svg>
  ),
  Nuxt: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M13.4642 19.8295h8.9218c.2964 0 .5889-.0774.8443-.2252a1.6851 1.6851 0 0 0 .6189-.6165 1.6747 1.6747 0 0 0 .0004-1.674l-4.459-7.749a1.6853 1.6853 0 0 0-.619-.6168 1.6737 1.6737 0 0 0-1.6904.0017 1.685 1.685 0 0 0-.6175.619l-1.1003 1.9093-2.1953-3.8124a1.6887 1.6887 0 0 0-.6188-.617 1.6757 1.6757 0 0 0-1.688 0 1.6883 1.6883 0 0 0-.6187.617L.1696 17.5338A1.6747 1.6747 0 0 0 .17 19.208c.1448.2508.3539.4579.6062.6055.2524.1476.5392.2255.8313.2252l5.8986-.0008c2.3408 0 4.0765-1.0251 5.2423-3.0382l2.8754-4.9969 1.5382 2.6718-2.3378 4.0607c-.1135.1965-.1726.4195-.1706.646zm-7.5956-2.4367L2.55 17.394l4.1075-7.135 2.413 4.1895-1.2308 2.1397c-.7657 1.3267-1.5833 1.9196-2.9911 1.9196z"/>
    </svg>
  ),
  Angular: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996L7.574 18.31H4.936L12 2.981z"/>
    </svg>
  ),
  Svelte: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.287-.21a7.204 7.204 0 0 0-2.186-1.092l-.208-.063.02-.208a1.253 1.253 0 0 0-.226-.83 1.337 1.337 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.075 4.075 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499"/>
    </svg>
  ),
  Astro: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.275 3.76.186 5.57-.5.12-.045.234-.1.358-.154l-.052.482c-.197 1.835-1.234 3.04-2.955 3.55-1.089.32-2.169.282-3.193-.108-.23-.088-.45-.196-.848-.406a4.783 4.783 0 0 1-.072-.063c-.014-.016-.028-.03-.042-.04.001 0 .001 0 0-.002v.001l1 .65v-.002zm8.44-8.22c-.79-1.134-1.748-2.096-2.845-2.868a12.47 12.47 0 0 1 2.025 4.08c-2.254.634-4.505.64-6.63-.14a8.085 8.085 0 0 1-1.62-.857 7.56 7.56 0 0 1-1.248-1.104A7.21 7.21 0 0 1 5.4 8.718c-.348-.878-.37-1.81-.013-2.665.404-.97 1.113-1.576 2.043-1.889.945-.318 1.938-.265 2.862.083a12.52 12.52 0 0 1 3.265-1.84 12.04 12.04 0 0 1 4.05-.687c.022.001.044.003.066.004a12.02 12.02 0 0 0-7.83-2.878C4.388.846.012 5.222.012 10.598c0 5.376 4.374 9.74 9.768 9.74 5.385 0 9.756-4.356 9.768-9.726v-.003a12.58 12.58 0 0 0-.75-4.667z"/>
    </svg>
  ),
  WordPress: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.085 6.93c.648-.03 1.233-.105 1.233-.105.582-.074.514-.93-.068-.899 0 0-1.755.135-2.88.135-.2 0-.438-.006-.69-.015C4.947 4.09 8.246 2.025 12 2.025c2.715 0 5.189 1.035 7.249 2.715-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61zm-2.505 13.034l3.93-11.43c.656 1.733.823 3.128.823 4.358 0 1.482-.27 2.791-.78 3.914l-3.973 3.158zm-9.018-9.75c.51 3.474 2.467 6.497 5.228 8.415l-5.228-8.415z"/>
    </svg>
  ),
  Shopify: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.98-.136-1.98-.136-.868-.866-1.212-1.21V23.98zm-1.095.021L13.306 0S11.635-.007 11.617 0c-.04.012-.48.15-.48.15s-.31 7.658-.329 7.746c-.019.089-.107.176-.244.244-.136.067-1.195.583-1.195.583s-.195-1.196-1.212-1.212a5.208 5.208 0 0 0-1.56-1.56C5.564 4.83 3.73 5.34 3.73 5.34s-1.754 8.847-1.754 8.848c-.02.099-.136.244-.136.244-.02.02-.99 5.284-.99 5.284l-.829.18S24.02 24.98 24.02 24.97c0-.01-9.778-.97-9.778-.97zM11.617 0c.017-.007.156 4.46.156 4.46s-.974.47-1.272.632c-.136.068-.192.204-.192.34V23.17L6.28 22.4s1.74-9.47 1.76-9.56c.02-.1.087-.2.145-.244.176-.098.62-.351.62-.351s.204-3.72.204-3.798c0-.077-.009-.144-.048-.199-.038-.056-.19-.328-.19-.328s.097-1.485.097-1.502c0-.018-.077-.135-.077-.135S7.62 7.37 7.63 7.371c.009-.002-.019-1.405 0-1.41.019-.008 1.638-.63 1.638-.63s.389-2.564.389-2.573c0-.01-.02-.009-.02-.009L11.617 0z"/>
    </svg>
  ),
  Webflow: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17.655 7.755L14.44 19.25l-2.65-8.33-2.065 8.33L6.51 7.755H0c1.57 3.89 3.39 7.435 5.17 10.175 2.53 3.895 4.88 5.82 7.62 5.82 2.74 0 4.42-2.175 6.005-5.025.14-.25.275-.505.415-.765l-.025-.01c.28-.545.56-1.11.84-1.69L24 7.755h-6.345z"/>
    </svg>
  ),
  Remix: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.565 17.014c.153.733.282 1.518.282 2.486H24s-.154-1.053-.303-1.762c-.544-2.585-1.825-4.023-4.312-4.66 2.51-.763 3.908-2.52 3.908-5.307C23.293 3.57 20.537 2 15.08 2H0v20h8.637v-6.5h5.067c.71 0 .93.16 1.03.675l-.17-.16zm-1.18-9.15c0 1.87-.79 2.696-3.23 2.696H8.638V5.28h3.513c2.44 0 3.234.787 3.234 2.585z"/>
    </svg>
  ),
  Gatsby: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2.571c3.171 0 6 1.457 7.886 3.600L3.886 19.886A9.4 9.4 0 0 1 2.57 12c0-5.143 4.286-9.429 9.43-9.429zm0 18.858a9.387 9.387 0 0 1-7.886-3.600l16-16c2.143 1.886 3.6 4.715 3.6 7.886 0 5.143-4.286 9.429-9.429 9.429z"/>
    </svg>
  ),
};

const integrations = [
  { name: "React", category: "SPA" },
  { name: "Next.js", category: "Framework" },
  { name: "Vue", category: "SPA" },
  { name: "Nuxt", category: "Framework" },
  { name: "Angular", category: "SPA" },
  { name: "Svelte", category: "SPA" },
  { name: "Astro", category: "Static" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "Commerce" },
  { name: "Webflow", category: "NoCode" },
  { name: "Remix", category: "Framework" },
  { name: "Gatsby", category: "Static" },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="integrations" ref={sectionRef} className="relative overflow-hidden">

      {/* Header — centré verticalement sur l'image */}
      <div className="relative z-10 pt-32 lg:pt-40 text-center">
        <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 justify-center ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <span className="w-12 h-px bg-foreground/20" />
          Integrations
          <span className="w-12 h-px bg-foreground/20" />
        </span>

        <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          Works
          <br />
          <span className="text-muted-foreground">everywhere.</span>
        </h2>

        <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto transition-all duration-1000 delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          One script tag. Any framework, CMS, or platform. No adapters, plugins, or build steps required.
        </p>
      </div>

      {/* Full-width image */}
      <div className={`relative left-1/2 -translate-x-1/2 w-screen -mt-16 transition-all duration-1000 delay-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/connection-KeJwWPQvn6l0a7C48tCARYtNEdC92H.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Integration grid — remonte sur l'image avec spacing mobile approprié */}
      <div className="relative z-10 mt-0 lg:-mt-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className={`group relative overflow-hidden p-6 lg:p-8 border transition-all duration-500 cursor-default ${
                hoveredIndex === index
                  ? "border-foreground bg-foreground/[0.04] scale-[1.02]"
                  : "border-foreground/10 hover:border-foreground/30"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${index * 30 + 300}ms`,
              }}
              onMouseEnter={(e) => {
                setHoveredIndex(index);
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setMousePos(null);
              }}
            >
              {/* Cursor-following halo */}
              {hoveredIndex === index && mousePos && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0"
                  style={{
                    background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1) 0%, transparent 70%)`,
                  }}
                />
              )}
              {/* Category tag */}
              <span className={`absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 transition-colors ${
                hoveredIndex === index
                  ? "bg-foreground text-background"
                  : "bg-foreground/10 text-muted-foreground"
              }`}>
                {integration.category}
              </span>

              {/* Logo */}
              <div className={`w-10 h-10 mb-6 flex items-center justify-center transition-colors ${
                hoveredIndex === index ? "text-white" : "text-foreground/60"
              }`}>
                {logos[integration.name]}
              </div>

              <span className="font-medium block">{integration.name}</span>

              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/20 overflow-hidden">
                <div className={`h-full bg-foreground transition-all duration-500 ${
                  hoveredIndex === index ? "w-full" : "w-0"
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className={`flex flex-wrap items-center justify-between gap-8 pt-12 border-t border-foreground/10 transition-all duration-1000 delay-500 pb-32 lg:pb-40 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex flex-wrap gap-12">
            {[
              { value: "< 2 KB", label: "Script size" },
              { value: "0 deps", label: "Zero dependencies" },
              { value: "Async", label: "Non-blocking load" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="text-3xl font-display">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="#" className="group inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors">
            View all integrations
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
