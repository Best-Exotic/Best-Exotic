
const supportedApplets = ['info', 'flashcard']

export default (props) => {
    switch (props.applet) {
        case 'entry':
            break
        case 'flashcard':
            break
        case 'info':
            break
        default:
            throw("applet not found")
    }
}
