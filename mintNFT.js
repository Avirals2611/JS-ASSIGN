/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
const NFTs = [];

function mintNFT(title, artist, year, medium) {
    const myNFT = {
        title, artist, year, medium
    };
    NFTs.push(myNFT);

}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    let i = 0;
    while (i < NFTs.length) {
        console.log("\nTitle: \t\t" + NFTs[i].title);
        console.log("Artist: \t" + NFTs[i].artist);
        console.log("Year: \t\t" + NFTs[i].year);
        console.log("Medium: \t" + NFTs[i].medium);
        ++i;
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number of NFTs minted: " + NFTs.length + " NFT");
}

mintNFT("Sunset Overdrive", "AMRIT", 2021, "Digital Painting");
mintNFT("Urban Jungle", "RAVI", 2022, "3D Model");
mintNFT("Mystic Forest", "MANOJ", 2020, "Photograph");

// call your functions below this line


listNFTs();

getTotalSupply();