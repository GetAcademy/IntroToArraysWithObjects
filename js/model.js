const model = {
    currentPage: null,
    selectedThemeIndex: null,
    themes: [
        {
            fore: 'black',
            back: 'white',
            highlight: 'blue',
            madeBy: 'per',
        },
        {
            fore: 'white',
            back: 'black',
            highlight: '#21EACC',
            madeBy: 'ida',
        },
        {
            fore: 'white',
            back: 'green',
            highlight: 'blue',
            madeBy: 'per',
        },
    ],    
    isAdding: false,
    themeInput: {
        fore: '',
        back: '',
        highlight: '',
        madeBy: '',
    },
}
