import React, { useState, useEffect } from 'react';
import productsData from './dummyData.json';
import { PopupContent, CloseButton, PopupTitle, PopupDescription, PopupCommission, Button, LinkContainer, LinkInput, CopyButton, OutOfStock, PopupOverlay, ProductImage, ProductCard, ProductGrid, ProductInfo, ProductName, ProductDescription, ProductCommission, ButtonContainer, AppContainer, Header, SearchContainer, SearchInput } from './ProductsList.styles';

const ProductList = () => {
    const [generatedLinks, setGeneratedLinks] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(productsData);
  
    useEffect(() => {
      const filtered = productsData.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.commission.toString().includes(searchTerm)
      );
      setFilteredProducts(filtered);
    }, [searchTerm]);
  
    const generateLink = (productId) => {
      const product = productsData.find(p => p.id === productId);
      if (!product.inStock) return;
      const uniqueId = Math.random().toString(36).substring(7);
      const link = `https://example.com/affiliate/${uniqueId}/${productId}`;
      setGeneratedLinks(prev => ({
        ...prev,
        [productId]: link
      }));
    };
  
    const copyToClipboard = (link) => {
      navigator.clipboard.writeText(link);
      alert('Link copied to clipboard!');
    };
  
    const openPopup = (product) => {
      setSelectedProduct(product);
    };
  
    const closePopup = () => {
      setSelectedProduct(null);
    };
  
    return (
      <AppContainer>
        <Header>Affiliate Marketing Products</Header>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search by product name or commission percentage"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        <ProductGrid>
          {filteredProducts.map(product => (
            <ProductCard key={product.id}>
              <ProductImage src={product.imageUrl} alt={product.name} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductCommission>Commission: {product.commission}%</ProductCommission>
                <ButtonContainer>
                  <Button onClick={() => openPopup(product)}>Show Details</Button>
                  <Button 
                    primary 
                    onClick={() => generateLink(product.id)}
                    disabled={!product.inStock}
                  >
                    Generate Link
                  </Button>
                </ButtonContainer>
                {generatedLinks[product.id] && (
                  <LinkContainer>
                    <LinkInput type="text" value={generatedLinks[product.id]} readOnly />
                    <CopyButton onClick={() => copyToClipboard(generatedLinks[product.id])}>
                      Copy
                    </CopyButton>
                  </LinkContainer>
                )}
              </ProductInfo>
              {!product.inStock && <OutOfStock>Out of Stock</OutOfStock>}
            </ProductCard>
          ))}
        </ProductGrid>
        {selectedProduct && (
          <PopupOverlay onClick={closePopup}>
            <PopupContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closePopup}>&times;</CloseButton>
              <PopupTitle>{selectedProduct.name}</PopupTitle>
              <ProductImage src={selectedProduct.imageUrl} alt={selectedProduct.name} />
              <PopupDescription>{selectedProduct.description}</PopupDescription>
              <PopupCommission>Commission: {selectedProduct.commission}%</PopupCommission>
              <PopupDescription>{selectedProduct.marketingMaterials}</PopupDescription>
              {selectedProduct.inStock ? (
                <p>In Stock</p>
              ) : (
                <p style={{ color: 'red' }}>Out of Stock</p>
              )}
            </PopupContent>
          </PopupOverlay>
        )}
      </AppContainer>
    );
  };
  
  export default ProductList;