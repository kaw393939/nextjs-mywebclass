import { useState } from 'react'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Try', href: '/try' },
    
]

export default function Footer() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <footer>
            footer
        </footer>
    )
}