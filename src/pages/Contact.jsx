import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const FIELDS = [
{ key: 'name', prompt: 'VOLLSTÄNDIGER_NAME', placeholder: 'Max Mustermann', type: 'text', required: true, label: 'Name' },
{ key: 'email', prompt: 'E-MAIL_ADRESSE', placeholder: 'max@unternehmen.de', type: 'email', required: true, label: 'E-Mail' },
{ key: 'company', prompt: 'UNTERNEHMEN', placeholder: 'Mustermann GmbH (optional)', type: 'text', required: false, label: 'Unternehmen' },
{ key: 'message', prompt: 'NACHRICHT', placeholder: 'Beschreiben Sie Ihr Anliegen oder Projekt...', type: 'textarea', required: true, label: 'Nachricht', minLength: 2 }];


function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getError(field, value) {
  if (field.required && !value.trim()) {
    return `Bitte geben Sie Ihren ${field.label} an.`;
  }
  if (field.key === 'email' && value.trim() && !validateEmail(value)) {
    return 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
  }
  if (field.minLength && value.trim().length > 0 && value.trim().length < field.minLength) {
    return `Die ${field.label} muss mindestens ${field.minLength} Zeichen enthalten.`;
  }
  return null;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const handleBlur = (field) => {
    setActiveField(null);
    setTouched((prev) => ({ ...prev, [field.key]: true }));
    const error = getError(field, formData[field.key]);
    setErrors((prev) => ({ ...prev, [field.key]: error }));
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field.key]: value }));
    if (touched[field.key]) {
      const error = getError(field, value);
      setErrors((prev) => ({ ...prev, [field.key]: error }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    const newTouched = {};
    let hasError = false;

    FIELDS.forEach((field) => {
      newTouched[field.key] = true;
      const error = getError(field, formData[field.key]);
      if (error) {
        newErrors[field.key] = error;
        hasError = true;
      }
    });

    setTouched(newTouched);
    setErrors(newErrors);

    if (!hasError) {
      setSending(true);
      setSendError(null);
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message
        })
      });
      const data = await res.json();
      setSending(false);
      if (data.success) {
        setSubmitted(true);
      } else {
        setSendError('Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut.');
      }
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>
            
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
              // Kontaktaufnahme
            </p>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-foreground leading-none">
              KONTAKT
            </h1>
            <p className="font-mono text-sm text-muted-foreground mt-6 max-w-xl leading-relaxed">IT-Support anfordern, IT-Infrastruktur modernisieren oder einen Wartungsvertrag abschließen — teilen Sie uns Ihr Anliegen mit und wir melden uns meist innerhalb von 24 Stunden mit einer qualifizierten Einschätzung.


            </p>
          </motion.div>
        </div>
      </section>

      {/* CLI Form */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="border border-border/30 bg-card/30 backdrop-blur-xl overflow-hidden">
            
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/20 bg-card/50">
              <Terminal size={14} className="text-primary" />
              <span className="font-mono text-xs text-muted-foreground">stahl.computer — secure_contact v2.1</span>
              <div className="ml-auto flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-border/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-border/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
              </div>
            </div>

            {!submitted ?
            <form onSubmit={handleSubmit} noValidate className="p-6 md:p-8 space-y-6">
                <div className="font-mono text-xs text-muted-foreground mb-6">
                  <span className="text-primary">$</span> Verbindung aufgebaut. Bitte alle Pflichtfelder ausfüllen.
                  <br />
                  <span className="text-primary">$</span> Pflichtfelder: name, email, message — unternehmen: optional
                </div>

                {FIELDS.map((field, i) => {
                const hasError = touched[field.key] && errors[field.key];
                const isActive = activeField === field.key;

                const baseInputClass = `w-full bg-transparent border-b font-mono text-sm text-foreground placeholder-muted-foreground/30 focus:outline-none resize-none py-2 transition-colors duration-300 ${
                hasError ?
                'border-red-500' :
                isActive ?
                'border-primary' :
                'border-border/30'}`;


                return (
                  <motion.div
                    key={field.key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="space-y-2">
                    
                      <label className="font-mono text-xs text-muted-foreground block">
                        <span className="text-primary">{field.prompt}</span>
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                        {' '}&gt;
                      </label>

                      {field.type === 'textarea' ?
                    <textarea
                      value={formData[field.key]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      onFocus={() => setActiveField(field.key)}
                      onBlur={() => handleBlur(field)}
                      placeholder={field.placeholder}
                      rows={4}
                      className={baseInputClass} /> :


                    <input
                      type={field.type}
                      value={formData[field.key]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      onFocus={() => setActiveField(field.key)}
                      onBlur={() => handleBlur(field)}
                      placeholder={field.placeholder}
                      className={baseInputClass} />

                    }

                      {hasError &&
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-mono text-xs text-red-500 flex items-center gap-1">
                      
                          <span className="text-red-500">!</span> {errors[field.key]}
                        </motion.p>
                    }
                    </motion.div>);

              })}

                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="pt-4">
                
                  {sendError &&
                <p className="font-mono text-xs text-red-500 mb-3">! {sendError}</p>
                }
                  <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-heading font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed">
                  
                    <span className="font-mono text-xs">{sending ? '$ WIRD GESENDET...' : '$ ANFRAGE SENDEN'}</span>
                    {!sending && <ArrowRight size={14} />}
                  </button>
                </motion.div>
              </form> :

            <div className="p-6 md:p-8">
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-sm space-y-2">
                
                  <p className="text-primary">$ Anfrage erfolgreich übermittelt.</p>
                  <p className="text-muted-foreground">$ Erwartete Reaktionszeit: &lt; 24 Stunden</p>
                  <p className="text-muted-foreground">$ Status: IN_BEARBEITUNG</p>
                  <p className="text-foreground mt-6">
                    Vielen Dank, {formData.name}. Wir haben Ihre Anfrage erhalten und werden uns zeitnah bei Ihnen melden.
                  </p>
                </motion.div>
              </div>
            }
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
          { label: 'E-Mail', value: 'info@stahlcomputer.de' },
          { label: 'Telefon', value: '+49 721 - 234 65' },
          { label: 'Standort', value: 'Karlsruhe, Deutschland' }].
          map((item, i) =>
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border-t border-border/30 pt-6">
            
              <p className="font-mono text-xs text-primary tracking-widest uppercase mb-1">
                {item.label}
              </p>
              <p className="font-heading font-semibold text-foreground">{item.value}</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>);

}