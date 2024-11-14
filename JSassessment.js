// create a variable to hold your NFT's
const NFTdata = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_Name, _ShirtType, _EyeColor, _Bling) {
    const NFT = {
        "Name" : _Name,
        "Shirt" : _ShirtType,
        "Eyecolor" : _EyeColor,
        "Bling" : _Bling
    };
    NFTdata.push(NFT);
    console.log("Minted : " + _Name); 
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTdata.length; i++) {
        console.log("\nId:\t\t\t" + (i+1));
        console.log("Name:\t\t" + NFTdata[i].Name);
        console.log("Shirt Type:\t" + NFTdata[i].Shirt);
        console.log("Eye Color:\t" + NFTdata[i].Eyecolor);
        console.log("Bling:\t\t" + NFTdata[i].Bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFTdata.length);
}

// call your functions below this line
mintNFT("Ron", "T-shirt", "Brown", "Gold Chain");
mintNFT("Tej", "Shirt", "Blue", "Gold Chain");
mintNFT("Harry", "Hoodie", "Black", "Gold Chain");
mintNFT("Ayush", "T-shirt", "Brown", "Gold Chain");
listNFTs();
getTotalSupply();
