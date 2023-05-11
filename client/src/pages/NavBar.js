import React from "react";
import {
	Box,
	Flex,
	Heading,
	IconButton,
	Link,
	Stack,
	useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box bg="gray.200" px={4} py={2}>
			<Flex alignItems="center" justifyContent="space-between">
				<Heading size="md">My App</Heading>
				<IconButton
					aria-label="Menu"
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					variant="outline"
					onClick={isOpen ? onClose : onOpen}
					display={{ md: "none" }}
				/>
				<Stack
					direction={{ md: "row" }}
					display={{ base: "none", md: "flex" }}
					alignItems="center"
					spacing={4}
				>
					<Link href="/">Home</Link>
					<Link href="/about/this/site">About</Link>
					<Link href="/contact">Contact</Link>
					<Link href="/sign-in">Sing in</Link>
					<Link href="/sign-up">sign up</Link>
				</Stack>
			</Flex>
			{isOpen && (
				<Box pb={4} display={{ md: "none" }}>
					<Stack as="nav" spacing={4}>
						<Link href="#">Home</Link>
						<Link href="#">About</Link>
						<Link href="#">Contact</Link>
					</Stack>
				</Box>
			)}
		</Box>
	);
};

export default Navbar;
