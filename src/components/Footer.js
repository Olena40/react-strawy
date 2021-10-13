import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
      <Box>
        <h2 style={{ color: "darkgreen", 
                     textAlign: "center", 
                     marginTop: "5px" ,
                     marginBottom: "-5px" }}>
          Recipe studio
        </h2>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </Column>
            <Column>
              <Heading id='serv'>Services</Heading>
              <FooterLink href="#">Writing</FooterLink>
              <FooterLink href="#">Coding</FooterLink>
              <FooterLink href="#">Teaching</FooterLink>
            </Column>

            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    Instagram
                  </span>
                  </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>
                    Twitter
                  </span>
                </i>
              </FooterLink>
              
            </Column>
          </Row>
        </Container>
      </Box>
    );
  };
  export default Footer;