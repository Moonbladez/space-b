export const Pagination = (page, numberofPages, handleSetPage) =>  {
	const pagesAsArray = Array.from(Array(numberofPages).keys()).map((interger) => interger)

	const previousPage = () => handleSetPage(page >= 1 ? page - 1 : page);
	const currentPage = (page) => handleSetPage(page);
	const nextPage = () => handleSetPage(page < numberOfPages - 1 ? page + 1 : page);


	return (
		<nav>
		<button onClick={previousPage} type="button">
		  {'<'}
		</button>
		{pagesAsArray.map((page) => (
		  <button onClick={() => currentPage(page)} type="button" key={page} data-page={page}>
			{page + 1}
		  </button>
		))}
		<button onClick={nextPage} type="button">
		  {'>'}
		</button>
	  </nav>
	)
	
}