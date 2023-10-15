import "https://github.com/cinast/blockJs/blob/main/blockJs/lib.js"

void (() => {
    const ss = sessionStorage
    const t = random(1e10, 1e11).toString(64);
    ss.setItem("",t)
});
