export default class App {

    title: string
    containerEl: HTMLElement
    titleEl: HTMLElement

    setTitle(title: string): App {
        this.title = title
        return this
    }

    render(): void {
        this.containerEl = document.getElementById('app')
        this.titleEl = document.createElement('h1')

        this.titleEl.innerText = this.title
        this.containerEl.append(this.titleEl)
    }

}
