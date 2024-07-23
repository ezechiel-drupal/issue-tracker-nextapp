"use client";

import { Avatar, Box, Container, DropdownMenu, Flex } from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  console.log(session);

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className="px-5 py-2 border-b mb-5">
      <Container>
        <Flex justify="between" align="center">
          <Link href="/">
            <FaBug />
          </Link>
          <Flex align="center" gap="3">
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className={classNames({
                      "text-zinc-900": link.href === currentPath,
                      "text-zinc-500": link.href !== currentPath,
                      "hover:text-zinc-800 transition-colors": true,
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Box>
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session.user!.image!}
                    fallback="?"
                    size="4"
                    radius="full"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>{session.user!.email}</DropdownMenu.Label>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              //<Link href="api/auth/signout">Sign out</Link>
            )}
            {status === "unauthenticated" && (
              <Link href="api/auth/signin">Sign in</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
