export class one
{
    load()
    {
        if (sessionStorage.getItem('books') === null || sessionStorage.getItem('books') == undefined)
        {
            console.log("Creating the initial set of books ...");
            var books = [
                {
                    id: 1,
                    title: "Lord of the rings",
                    author: "James vince",
                    isbn: "7890",
                    publicationDate: "28 aug 1995",
                    publisher: "KP",
                    price: "678",
                    genre: "Fiction",
                    format: "Paperback",
                },
                {
                    id: 2,
                    title: "Harry potter",
                    author: "Garry Ballance",
                    isbn: "7887",
                    publicationDate: "28 oct 1996",
                    publisher: "RED",
                    price: "1008",
                    genre: "Adventure",
                    format: "Paperback",
                },
                {
                    id: 3,
                    title: "Fidty Shades of Grey",
                    author: "E.L james",
                    isbn: "1234",
                    publicationDate: "23 aug 1995",
                    publisher: "VIS",
                    price: "450",
                    genre: "Romantic",
                    format: "Paperback",
                },
                {
                    id: 4,
                    title: "Gone girl",
                    author: "Gillian flynn",
                    isbn: "5678",
                    publicationDate: "12 jan 2011",
                    publisher: "SLB",
                    price: "890",
                    genre: "Thriller",
                    format: "Paperback",
                }
            
            ];
            sessionStorage.setItem('books', JSON.stringify(books));
        }
        else{
            console.log("Loaded the books from storage.. ");
        }
    }
}