import React from "react";
import { Box, Flex, Link, Stack, AbsoluteCenter } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<Box as="footer" bg="gray.200" py={6} px={4}>
			<Flex justifyContent="center" mt={4}>
				<Stack spacing={2} direction={{ base: "column", md: "row" }}>
					<Box>
						<Stack direction="row" spacing={4}>
							<Link href="https://www.facebook.com" target="_blank">
								<FaFacebook />
							</Link>
							<Link href="https://www.twitter.com" target="_blank">
								<FaTwitter />
							</Link>
							<Link href="https://www.instagram.com" target="_blank">
								<FaInstagram />
							</Link>
						</Stack>
					</Box>
				</Stack>
			</Flex>
			<Flex justifyContent="center" mt={4}>
				<Box fontSize="sm">
					&copy; {new Date().getFullYear()} My App. All rights reserved.
				</Box>
			</Flex>
		</Box>
	);
};

export default Footer;
