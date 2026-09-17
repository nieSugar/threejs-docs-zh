import { resources, trackMeta } from './resources.js';

const elements = {
	grid: document.querySelector( '#resourceGrid' ),
	empty: document.querySelector( '#emptyState' ),
	results: document.querySelector( '#resultsCount' ),
	search: document.querySelector( '#searchInput' ),
	track: document.querySelector( '#trackFilter' ),
	language: document.querySelector( '#languageFilter' ),
	price: document.querySelector( '#priceFilter' ),
	form: document.querySelector( '#filters' )
};

document.querySelector( '#resourceCount' ).textContent = resources.length;
document.querySelector( '#chineseCount' ).textContent = resources.filter( ( resource ) => resource.languages.includes( 'zh' ) ).length;
document.querySelector( '#freeCount' ).textContent = resources.filter( ( resource ) => resource.price === 'free' ).length;

for ( const button of document.querySelectorAll( '[data-track-link]' ) ) {

	button.addEventListener( 'click', () => {

		elements.track.value = button.dataset.trackLink;
		render();
		document.querySelector( '#library' ).scrollIntoView();

	} );

}

elements.form.addEventListener( 'input', render );
elements.form.addEventListener( 'reset', () => requestAnimationFrame( render ) );

render();

function render() {

	const query = elements.search.value.trim().toLocaleLowerCase( 'zh-CN' );
	const filtered = resources.filter( ( resource ) => {

		const searchable = [ resource.name, resource.summary, resource.audience, resource.note, ...resource.topics ].join( ' ' ).toLocaleLowerCase( 'zh-CN' );
		return ( ! query || searchable.includes( query ) ) &&
			( elements.track.value === 'all' || resource.track === elements.track.value ) &&
			( elements.language.value === 'all' || resource.languages.includes( elements.language.value ) ) &&
			( elements.price.value === 'all' || resource.price === elements.price.value );

	} );

	elements.grid.replaceChildren( ...filtered.map( createCard ) );
	elements.empty.hidden = filtered.length !== 0;
	elements.results.textContent = `显示 ${ filtered.length } / ${ resources.length } 个资源`;

}

function createCard( resource ) {

	const article = document.createElement( 'article' );
	article.className = 'resource-card';
	article.style.setProperty( '--accent', trackMeta[ resource.track ].color );

	const top = element( 'div', 'card-top' );
	top.append( element( 'span', 'track-badge', trackMeta[ resource.track ].label ) );
	const badges = element( 'div', 'meta-badges' );
	badges.append(
		element( 'span', 'meta-badge', languageLabel( resource.languages ) ),
		element( 'span', 'meta-badge', priceLabel( resource.price ) ),
		element( 'span', 'meta-badge', levelLabel( resource.level ) )
	);
	top.append( badges );

	const title = element( 'h3', '', resource.name );
	const summary = element( 'p', 'summary', resource.summary );
	const topics = element( 'div', 'topics' );
	for ( const topic of resource.topics.slice( 0, 6 ) ) topics.append( element( 'span', 'topic', topic ) );
	const audience = labeledParagraph( 'audience', '适合', resource.audience );
	const note = labeledParagraph( 'note', '注意', resource.note );

	const footer = element( 'div', 'card-footer' );
	footer.append( element( 'span', 'reuse', resource.reuse ) );
	const link = element( 'a', 'visit-link', '访问原站 ↗' );
	link.href = resource.url;
	link.target = '_blank';
	link.rel = 'noopener noreferrer';
	footer.append( link );

	article.append( top, title, summary, topics, audience, note, footer );
	return article;

}

function labeledParagraph( className, label, text ) {

	const paragraph = element( 'p', className );
	paragraph.append( element( 'strong', '', `${ label }：` ), document.createTextNode( text ) );
	return paragraph;

}

function element( tag, className, text ) {

	const node = document.createElement( tag );
	if ( className ) node.className = className;
	if ( text ) node.textContent = text;
	return node;

}

function languageLabel( languages ) {

	if ( languages.includes( 'zh' ) && languages.includes( 'en' ) ) return '中 / EN';
	return languages.includes( 'zh' ) ? '中文' : 'EN';

}

function priceLabel( price ) {

	return { free: '免费', freemium: '部分付费', paid: '付费' }[ price ];

}

function levelLabel( level ) {

	return { beginner: '入门', intermediate: '进阶', advanced: '高级' }[ level ];

}
