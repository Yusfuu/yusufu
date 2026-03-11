'use client';

export default function GrainOverlay() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          pointerEvents: 'none',
          opacity: 0.032,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />
      <style>{`
        @keyframes grain {
          0%,100% { transform: translate(0,0); }
          10%      { transform: translate(-2%,-2%); }
          20%      { transform: translate(2%,1%); }
          30%      { transform: translate(-1%,3%); }
          40%      { transform: translate(3%,-1%); }
          50%      { transform: translate(-2%,2%); }
          60%      { transform: translate(1%,-3%); }
          70%      { transform: translate(-3%,1%); }
          80%      { transform: translate(2%,3%); }
          90%      { transform: translate(-1%,-2%); }
        }
      `}</style>
      <div
        style={{
          position: 'fixed',
          inset: '-10%',
          zIndex: 999,
          pointerEvents: 'none',
          opacity: 0.028,
          animation: 'grain 0.18s steps(1) infinite',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
    </>
  );
}
