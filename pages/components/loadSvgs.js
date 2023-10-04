
const importAll = (r) => {
    let svgs = {};
    r.keys().forEach((key) => {
      const svgName = key.replace('./', '').replace('.svg', '');
      svgs[svgName] = r(key).default;
    });
    return svgs;
  };
  
  const useSvg = importAll(require.context('../../public/svgs', false, /\.svg$/));
  

  export default useSvg;