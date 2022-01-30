import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                    }
                }
            }
        }
    `);

    const author = data.site.siteMetadata?.author;

    return (
        <div className="bio">
            <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/my_profile.jpeg"
                width={80}
                height={80}
                quality={95}
                alt="Profile picture"
            />
            {author?.name && (
                <p>
                    <strong>{author.name}</strong>
                    <br />
                    {author.summary}
                    <br />
                    <a href={`https://github.com/paerck25`}>Github</a>
                </p>
            )}
        </div>
    );
};

export default Bio;
