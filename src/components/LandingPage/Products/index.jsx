
import { Box, Heading, Stack, Text,Container } from "@chakra-ui/react";
import { ProductDetails } from "@/dataIndex/Productlayoutdata";
import TwoColLayout from "./TwoColLayout";


const Products = () => {
    return (
        <Box p={"5vw"} id="products">
           <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading variant="sectionsHead">Our Products</Heading>
        <Text variant="sectionDesc">
        Our comprehensive product range which continues to grow through research and development initiatives, includes the following:
        </Text>
      </Stack>
            {ProductDetails.map((detail, index) => {
                return (
                    <TwoColLayout
                        key={index + "ProductDetails"}
                        index={index}
                        Data={detail}
                    />
                );
            })}
        </Box>
    );
};
export default Products;
