import helmet, { hidePoweredBy } from 'helmet';

// https://www.securecoding.com/blog/using-helmetjs/

const contentSecurityPolicyOption = {
    useDefaults: true,
    directives: {
        "script-src": ["'self'"],
        "style-src": null
    }
};
const expectCtOption = {
    maxAge: 96400,
    enforce: true,
    reportUri: 'nope'
}
const dnsPrefetchControlOption = { allow: true };
const rameguardOption = { action: "deny" };
const hstsOption = { maxAge:123456, includeSubDomains: false };
const referrerPolicyOption = { policy: ["origin", "unsafe-url"] };

const getHelmet = () => helmet({
    contentSecurityPolicy: contentSecurityPolicyOption, // Content-Security-Policy
    dnsPrefetchControl: dnsPrefetchControlOption,       // X-DNS-Prefetch-Control
    expectCt: expectCtOption,                           // Expect-CT
    frameguard: rameguardOption,                        // X-Frame-Options
    hsts: hstsOption,                                   // Strict-Transport-Security
    referrerPolicy: referrerPolicyOption,               // Referrer-Policy
    hidePoweredBy: true,                                // X-Powerd-By
    ieNoOpen: true,                                     // X-Download_options
    noSniff: true,                                      // X-Content-Type-Options
    xssFilter: true,                                    // X-XSS-Protection
});

export default getHelmet;