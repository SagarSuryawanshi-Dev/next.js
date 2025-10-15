export default function ProfileLayout({ children}) {
    return (
        <html>
            <body>
                <h1>Hello nested Layouts</h1>
                {children}
            </body>
        </html>
    )
}