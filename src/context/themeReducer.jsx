const themeReducer = (state, action) => {

    for (let i = 0; i <= 6; i++) {
        if (action.type === `color-${i}`) {
            return { ...state, primary: `color-${i}` }
        }
    }

    for (let i = 0; i <= 2; i++) {
        if (action.type === `bg-${i}`) {
            return { ...state, background: `bg-${i}` }
        }
    }

}

export default themeReducer