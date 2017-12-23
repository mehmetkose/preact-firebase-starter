import { h } from 'preact';
import { Link } from 'preact-router';

export default function () {
	return (
		<header className="header">
			<Link href="/"><h1>Preact&Firebase</h1></Link>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/blog">Blog</Link>
			</nav>
		</header>
	)
}
