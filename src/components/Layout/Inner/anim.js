export const perspective = {
    initial: {
        scale: 1,
        y: 0,
    },
    enter: {
        scale: 1,
        y: 0,
    },
    exit: {
        scale: 0.6,
        y: -1500,
        opacity: 0.5,
        transition: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}

export const slide = {
    initial: {
        y: "100vh",
    },
    enter: {
        y: "100vh", // Starts from the bottom (off-screen)
    },
    exit: {
        y: "-100vh", // Move up off-screen during exit
        transition: {
            duration: 1.5,
            // ease:[.35,1.03,.56,-0.07]
            
            ease:[0,.98,1,.02]
            // ease: [.16,.73,.83,.67] main 
            // ease: [0.76, 0, 0.24, 1]
        }
    }
};


export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    exit: {
        opacity: 1
    }
}