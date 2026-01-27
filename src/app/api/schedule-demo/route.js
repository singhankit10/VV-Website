// src/app/api/schedule-demo/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendUserConfirmation(formData) {
  try {
    await resend.emails.send({
      from: 'VideoVogue <ankit@videovogue.ai>',
      to: formData.workEmail,
      subject: 'Demo Request Received',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #0f172a;
                background: #ffffff;
                padding: 0;
                margin: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: #ffffff;
              }
              .header {
                padding: 48px 48px 32px;
                border-bottom: 1px solid #e2e8f0;
              }
              .logo {
                width: 140px;
                height: auto;
                display: block;
              }
              .content {
                padding: 48px 48px 64px;
              }
              .title {
                font-size: 24px;
                font-weight: 600;
                color: #0f172a;
                margin-bottom: 24px;
                letter-spacing: -0.5px;
              }
              .text {
                font-size: 16px;
                color: #475569;
                margin-bottom: 32px;
                line-height: 1.7;
              }
              .details {
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 32px;
                margin: 32px 0;
                background: #f8fafc;
              }
              .details-title {
                font-size: 14px;
                font-weight: 600;
                color: #64748b;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 24px;
              }
              .detail-row {
                display: flex;
                padding: 16px 0;
                border-bottom: 1px solid #e2e8f0;
              }
              .detail-row:last-child {
                border-bottom: none;
                padding-bottom: 0;
              }
              .detail-row:first-child {
                padding-top: 0;
              }
              .detail-label {
                font-size: 14px;
                color: #64748b;
                min-width: 140px;
                font-weight: 500;
              }
              .detail-value {
                font-size: 14px;
                color: #0f172a;
                font-weight: 500;
              }
              .section {
                margin: 48px 0;
              }
              .section-title {
                font-size: 18px;
                font-weight: 600;
                color: #0f172a;
                margin-bottom: 24px;
                letter-spacing: -0.3px;
              }
              .step {
                margin-bottom: 20px;
                padding-left: 32px;
                position: relative;
              }
              .step:before {
                content: '';
                position: absolute;
                left: 0;
                top: 6px;
                width: 6px;
                height: 6px;
                background: #0f172a;
                border-radius: 50%;
              }
              .step-text {
                font-size: 15px;
                color: #475569;
                line-height: 1.6;
              }
              .cta {
                text-align: center;
                margin: 48px 0;
              }
              .button {
                display: inline-block;
                background: #0f172a;
                color: #ffffff;
                text-decoration: none;
                padding: 14px 32px;
                border-radius: 6px;
                font-weight: 500;
                font-size: 15px;
              }
              .divider {
                height: 1px;
                background: #e2e8f0;
                margin: 48px 0;
              }
              .contact {
                font-size: 14px;
                color: #64748b;
                text-align: center;
                line-height: 1.8;
              }
              .contact a {
                color: #0f172a;
                text-decoration: none;
                font-weight: 500;
              }
              .footer {
                padding: 48px;
                border-top: 1px solid #e2e8f0;
                text-align: center;
              }
              .footer-text {
                font-size: 13px;
                color: #94a3b8;
                line-height: 1.8;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <img src="https://videovogue.ai/images/logo.png" alt="VideoVogue" class="logo">
              </div>

              <div class="content">
                <h1 class="title">Thank you, ${formData.fullName}</h1>
                
                <p class="text">
                  We've received your demo request. Our team will review your information and reach out within 24 hours to schedule a personalized session.
                </p>

                <div class="details">
                  <div class="details-title">Request Details</div>
                  <div class="detail-row">
                    <div class="detail-label">Company</div>
                    <div class="detail-value">${formData.companyName}</div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Email</div>
                    <div class="detail-value">${formData.workEmail}</div>
                  </div>
                  ${formData.platformType ? `
                  <div class="detail-row">
                    <div class="detail-label">Platform Type</div>
                    <div class="detail-value">${formData.platformType}</div>
                  </div>
                  ` : ''}
                  ${formData.goals ? `
                  <div class="detail-row">
                    <div class="detail-label">Goals</div>
                    <div class="detail-value">${formData.goals}</div>
                  </div>
                  ` : ''}
                </div>

                <div class="section">
                  <h2 class="section-title">What to Expect</h2>
                  <div class="step">
                    <div class="step-text">Our team will prepare a customized demonstration tailored to your platform</div>
                  </div>
                  <div class="step">
                    <div class="step-text">We'll schedule a 30-minute session at your convenience</div>
                  </div>
                  <div class="step">
                    <div class="step-text">You'll see exactly how VideoVogue can drive revenue growth</div>
                  </div>
                </div>

                <div class="cta">
                  <a href="https://videovogue.ai" class="button">Visit Website</a>
                </div>

                <div class="divider"></div>

                <div class="contact">
                  Questions? Contact us at <a href="mailto:Contact@videovogue.ai">Contact@videovogue.ai</a><br>
                  or call <a href="tel:+14086340911">+1 (408) 634-0911</a>
                </div>
              </div>

              <div class="footer">
                <div class="footer-text">
                  VideoVogue<br>
                  131, Continental Drive, Newark, DE 19713<br>
                  © 2026 VideoVogue. All rights reserved.
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    });
    
    return true;
  } catch (error) {
    console.error('Error sending user confirmation:', error);
    return false;
  }
}

async function sendTeamNotification(formData) {
  try {
    await resend.emails.send({
      from: 'VideoVogue Demos <ankit@videovogue.ai>',
      to: 'ankit@videovogue.ai',
      subject: `New Demo Request — ${formData.companyName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #0f172a;
                background: #ffffff;
                padding: 0;
                margin: 0;
              }
              .container {
                max-width: 650px;
                margin: 0 auto;
                background: #ffffff;
              }
              .header {
                padding: 48px 48px 32px;
                border-bottom: 1px solid #e2e8f0;
              }
              .logo {
                width: 140px;
                height: auto;
                display: block;
                margin-bottom: 24px;
              }
              .badge {
                display: inline-block;
                background: #0f172a;
                color: #ffffff;
                padding: 6px 12px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: 0.5px;
                text-transform: uppercase;
              }
              .content {
                padding: 48px;
              }
              .title {
                font-size: 24px;
                font-weight: 600;
                color: #0f172a;
                margin-bottom: 16px;
                letter-spacing: -0.5px;
              }
              .subtitle {
                font-size: 15px;
                color: #64748b;
                margin-bottom: 48px;
              }
              .section {
                margin-bottom: 48px;
              }
              .section-title {
                font-size: 14px;
                font-weight: 600;
                color: #64748b;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 24px;
              }
              .info-grid {
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                overflow: hidden;
              }
              .info-row {
                display: flex;
                padding: 20px 24px;
                border-bottom: 1px solid #e2e8f0;
                background: #ffffff;
              }
              .info-row:last-child {
                border-bottom: none;
              }
              .info-row:nth-child(even) {
                background: #f8fafc;
              }
              .info-label {
                font-size: 14px;
                color: #64748b;
                min-width: 140px;
                font-weight: 500;
              }
              .info-value {
                font-size: 14px;
                color: #0f172a;
                font-weight: 500;
                flex: 1;
              }
              .info-value a {
                color: #0f172a;
                text-decoration: underline;
              }
              .goals-box {
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 24px;
                background: #f8fafc;
              }
              .goals-title {
                font-size: 14px;
                font-weight: 600;
                color: #64748b;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 16px;
              }
              .goals-text {
                font-size: 14px;
                color: #475569;
                line-height: 1.7;
              }
              .actions {
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 32px;
                background: #f8fafc;
              }
              .actions-title {
                font-size: 16px;
                font-weight: 600;
                color: #0f172a;
                margin-bottom: 24px;
              }
              .action-item {
                padding-left: 24px;
                margin-bottom: 16px;
                position: relative;
                font-size: 14px;
                color: #475569;
              }
              .action-item:before {
                content: '';
                position: absolute;
                left: 0;
                top: 7px;
                width: 5px;
                height: 5px;
                background: #0f172a;
                border-radius: 50%;
              }
              .timestamp {
                text-align: center;
                font-size: 13px;
                color: #94a3b8;
                margin-top: 48px;
                padding-top: 32px;
                border-top: 1px solid #e2e8f0;
              }
              .footer {
                padding: 32px 48px;
                border-top: 1px solid #e2e8f0;
                text-align: center;
                font-size: 13px;
                color: #94a3b8;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <img src="https://videovogue.ai/images/logo.png" alt="VideoVogue" class="logo">
                <div class="badge">New Lead</div>
              </div>

              <div class="content">
                <h1 class="title">Demo Request Received</h1>
                <p class="subtitle">Contact within 24 hours to maximize conversion</p>

                <div class="section">
                  <div class="section-title">Contact Information</div>
                  <div class="info-grid">
                    <div class="info-row">
                      <div class="info-label">Name</div>
                      <div class="info-value">${formData.fullName}</div>
                    </div>
                    <div class="info-row">
                      <div class="info-label">Email</div>
                      <div class="info-value"><a href="mailto:${formData.workEmail}">${formData.workEmail}</a></div>
                    </div>
                    <div class="info-row">
                      <div class="info-label">Company</div>
                      <div class="info-value">${formData.companyName}</div>
                    </div>
                    ${formData.platformType ? `
                    <div class="info-row">
                      <div class="info-label">Platform Type</div>
                      <div class="info-value">${formData.platformType}</div>
                    </div>
                    ` : ''}
                  </div>
                </div>

                ${formData.goals ? `
                <div class="section">
                  <div class="goals-box">
                    <div class="goals-title">Goals &amp; Requirements</div>
                    <div class="goals-text">${formData.goals}</div>
                  </div>
                </div>
                ` : ''}

                <div class="section">
                  <div class="actions">
                    <div class="actions-title">Immediate Actions</div>
                    <div class="action-item">Add contact to CRM and Salesforce</div>
                    <div class="action-item">Review platform type and prepare relevant use cases</div>
                    <div class="action-item">Schedule personalized demo within 24 hours</div>
                    <div class="action-item">Send calendar invite with meeting agenda</div>
                  </div>
                </div>

                <div class="timestamp">
                  Submitted ${new Date().toLocaleString('en-US', { 
                    timeZone: 'America/New_York',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                  })} EST
                </div>
              </div>

              <div class="footer">
                VideoVogue Internal System
              </div>
            </div>
          </body>
        </html>
      `
    });
    
    return true;
  } catch (error) {
    console.error('Error sending team notification:', error);
    return false;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, workEmail, companyName, platformType, goals } = body;

    if (!fullName || !workEmail || !companyName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const formData = {
      fullName,
      workEmail,
      companyName,
      platformType: platformType || 'Not specified',
      goals: goals || 'Not provided'
    };

    const [userEmailSent, teamEmailSent] = await Promise.all([
      sendUserConfirmation(formData),
      sendTeamNotification(formData)
    ]);

    return NextResponse.json({
      success: true,
      message: 'Demo request submitted successfully',
      userEmailSent,
      teamEmailSent
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}