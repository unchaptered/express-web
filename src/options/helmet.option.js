import helmet, { hidePoweredBy } from 'helmet';

// https://www.securecoding.com/blog/using-helmetjs/
export const contentSecurityPolicyOption = {
    useDefaults: true,
    directives: {
        "script-src": ["'self'"],
        "style-src": null
    }
};
export const expectOption = {
    maxAge: 96400,
    enforce: true,
    reportUri: 'nope'
}
export const dnsPrefetchControlOption = { allow: true };
export const rameguardOption = { action: "deny" };
export const hstsOption = { maxAge:123456, includeSubDomains: false };
export const referrerPolicyOption = { policy: ["origin", "unsafe-url"] };

export const getHelmet = () => helmet({
    contentSecurityPolicy: contentSecurityPolicyOption, // Content-Security-Policy
    dnsPrefetchControl: dnsPrefetchControlOption,       // X-DNS-Prefetch-Control
    expectCt: expectOption,                           // Expect-CT
    frameguard: rameguardOption,                        // X-Frame-Options
    hsts: hstsOption,                                   // Strict-Transport-Security
    referrerPolicy: referrerPolicyOption,               // Referrer-Policy
    hidePoweredBy: true,                                // X-Powerd-By
    ieNoOpen: true,                                     // X-Download_options
    noSniff: true,                                      // X-Content-Type-Options
    xssFilter: true,                                    // X-XSS-Protection
});