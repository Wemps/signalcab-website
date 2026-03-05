# Signal Cab iOS Implementation Guide

## Overview

This guide shows how to implement Signal Cab's **Tech Industrial** design system in your iOS app using SwiftUI. The complete design tokens are available in `SignalCabDesignTokens.swift`.

---

## Quick Start

### 1. Add the Design Tokens File

1. Download `SignalCabDesignTokens.swift`
2. Add it to your Xcode project
3. Import it wherever needed (it extends SwiftUI, so no import required)

### 2. Install Custom Fonts

You'll need to install these fonts in your iOS project:

#### Required Fonts:
- **Space Grotesk** (Bold) - Logo and branding
  - Download: [Google Fonts - Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
  - File: `SpaceGrotesk-Bold.ttf`

- **Lora** (Regular, Semibold, Bold) - Headings
  - Download: [Google Fonts - Lora](https://fonts.google.com/specimen/Lora)
  - Files: `Lora-Regular.ttf`, `Lora-SemiBold.ttf`, `Lora-Bold.ttf`

- **Inter** (Regular, Medium, Semibold, Bold) - Body & UI
  - Download: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
  - Files: `Inter-Regular.ttf`, `Inter-Medium.ttf`, `Inter-SemiBold.ttf`, `Inter-Bold.ttf`

#### Installation Steps:
1. Add font files to your Xcode project
2. Add fonts to `Info.plist`:
```xml
<key>UIAppFonts</key>
<array>
    <string>SpaceGrotesk-Bold.ttf</string>
    <string>Lora-Regular.ttf</string>
    <string>Lora-SemiBold.ttf</string>
    <string>Lora-Bold.ttf</string>
    <string>Inter-Regular.ttf</string>
    <string>Inter-Medium.ttf</string>
    <string>Inter-SemiBold.ttf</string>
    <string>Inter-Bold.ttf</string>
</array>
```

---

## Usage Examples

### Colors

```swift
// Primary brand color
Text("Active")
    .foregroundColor(.signalMint)

// Background
VStack {
    // Content
}
.background(Color.signalNeutral950)

// Accent colors
Circle()
    .fill(Color.signalCyan)      // Information
    .fill(Color.signalBlue)      // Speed controls
    .fill(Color.signalPurple)    // Settings
    
// Semantic
Button("E-Stop") { }
    .foregroundColor(.signalError)
```

### Typography

```swift
// Display (48pt, Bold)
Text("Signal Cab")
    .font(SignalTypography.display)
    .foregroundColor(.signalNeutral100)

// Headings
Text("Locomotives")
    .font(SignalTypography.h1)  // 32pt

Text("Recent Activity")
    .font(SignalTypography.h2)  // 24pt

Text("Settings")
    .font(SignalTypography.h3)  // 20pt

// Body text
Text("Control your DCC locomotives")
    .font(SignalTypography.body)  // 16pt

Text("Last updated 2 min ago")
    .font(SignalTypography.bodySmall)  // 14pt

// Small UI text
Text("Speed")
    .font(SignalTypography.caption)  // 12pt

Text("FUNCTION")
    .font(SignalTypography.overline)  // 10pt
    .textCase(.uppercase)
```

### Spacing

```swift
VStack(spacing: SignalSpacing.lg) {  // 24pt
    HStack(spacing: SignalSpacing.sm) {  // 8pt
        Image(systemName: "train")
        Text("Locomotive")
    }
    .padding(SignalSpacing.md)  // 16pt
}
.padding(SignalSpacing.xl)  // 32pt
```

### Corner Radius

```swift
// Button
RoundedRectangle(cornerRadius: SignalRadius.base)  // 12pt

// Card
RoundedRectangle(cornerRadius: SignalRadius.lg)    // 16pt

// Modal
RoundedRectangle(cornerRadius: SignalRadius.xl)    // 20pt

// Pill button
RoundedRectangle(cornerRadius: SignalRadius.full)  // Fully rounded
```

### Elevation (Shadows)

```swift
// Flat surface
VStack { }
    .background(Color.signalNeutral900)
    .cornerRadius(SignalRadius.lg)
    .signalShadowBase()

// Card with depth
VStack { }
    .background(Color.signalNeutral900)
    .cornerRadius(SignalRadius.lg)
    .signalShadowRaised()

// Modal/popover
VStack { }
    .background(Color.signalNeutral900)
    .cornerRadius(SignalRadius.xl)
    .signalShadowFloating()
```

### Logo

```swift
// App icon/logo
SignalLogo.icon(size: 80)

// Logo with text
HStack(spacing: 12) {
    SignalLogo.icon(size: 48)
    
    Text(SignalLogo.wordmark)
        .font(SignalLogo.wordmarkFont)
        .foregroundColor(.signalMint)
}
```

### Gradients

```swift
// App background
VStack { }
    .background(LinearGradient.appBackground)

// Throttle gradient (0-50% speed)
Rectangle()
    .fill(LinearGradient.throttleCoolWarm50)

// Throttle gradient (0-100% speed)
Rectangle()
    .fill(LinearGradient.throttleCoolWarm100)
```

---

## Component Examples

### Buttons

#### Design Philosophy

Signal Cab buttons use a **raised, tactile aesthetic** inspired by physical controls. Every button feels like you can press it—with depth created by bottom shadows that simulate elevation. When pressed, buttons shift down 2-3 pixels and show an inset shadow, mimicking physical button mechanics.

This creates an industrial, hands-on feeling appropriate for train control while remaining modern through our neon accent colors and dark tech aesthetic.

#### Button Types

**Primary Button**
- **Purpose:** Main actions like "Start Engine" or "Save"
- **Color:** Neon Mint (#00ffaa) background with dark text (#0a0f1a)
- **Shadow:** Darker mint (#00cc88) bottom shadow creates raised effect
- **Pressed:** Dark background (#111827), mint border (2px), inset shadow
- **Why:** Maximum visibility for critical actions. The mint color is our brand signature and demands attention.

**Secondary Button**
- **Purpose:** Supporting actions like "View Details" or "Cancel"
- **Color:** Neutral gray (#1f2937) background with cyan text (#00d9ff)
- **Shadow:** Darker gray (#111827) bottom shadow
- **Pressed:** Darker background, cyan border (2px), inset shadow
- **Why:** Less prominent than primary but still tech-forward. Cyan provides contrast without competing with mint.

**Danger Button**
- **Purpose:** Destructive actions like "Emergency Stop" or "Delete"
- **Color:** Red tinted background with red text (#ef4444) and 2px red border
- **Shadow:** Dark red (#b91c1c) bottom shadow
- **Pressed:** Dark background, red border maintained, inset shadow
- **Why:** Unmistakable danger signal. Border always visible to prevent accidental taps.

**Icon Buttons (Circular)**
- Used for compact actions like "Add", "Edit", or function toggles
- Follow same color logic as full buttons but in a 48×48pt circular format
- Size: Always 48×48pt (exceeds iOS minimum 44pt touch target)
- Shadow: 3px bottom shadow (slightly less than full buttons)
- Variants: Default (gray), Primary (mint), Status (mint border), Danger (red border)

#### Button States

- **Default:** Elevated appearance with bottom shadow. Looks "pressable" at rest.
- **Pressed:** Shifts down 2px, shows inset shadow, border becomes visible (2px accent color). Feels "pushed in."
- **Disabled:** Very dark background (#0a0f1a), muted text (#4b5563), 50% opacity. No shadow. Clearly non-interactive.
- **Timing:** All transitions: 150ms ease-in-out. Fast enough to feel responsive, slow enough to see the animation.

#### Primary Button

```swift
Button("Start Locomotive") {
    // Action
}
.font(SignalTypography.body)
.foregroundColor(.signalNeutral950)
.padding(.horizontal, SignalSpacing.md)
.padding(.vertical, SignalSpacing.base)
.background(Color.signalMint)
.cornerRadius(SignalRadius.base)
.shadow(color: Color.signalMint.opacity(0.3), radius: 12, y: 4)
```

#### Secondary Button

```swift
Button("Cancel") {
    // Action
}
.font(SignalTypography.body)
.foregroundColor(.signalNeutral300)
.padding(.horizontal, SignalSpacing.md)
.padding(.vertical, SignalSpacing.base)
.background(Color.signalNeutral800)
.cornerRadius(SignalRadius.base)
.overlay(
    RoundedRectangle(cornerRadius: SignalRadius.base)
        .stroke(Color.signalNeutral700, lineWidth: 1)
)
```

#### Danger Button

```swift
Button("E-Stop") {
    // Action
}
.font(SignalTypography.body)
.foregroundColor(.signalError)
.padding(.horizontal, SignalSpacing.md)
.padding(.vertical, SignalSpacing.base)
.background(Color.signalError.opacity(0.1))
.cornerRadius(SignalRadius.base)
.overlay(
    RoundedRectangle(cornerRadius: SignalRadius.base)
        .stroke(Color.signalError, lineWidth: 2)
)
.shadow(color: Color.signalError.opacity(0.3), radius: 12, y: 4)
```

#### Icon Buttons

```swift
// Add Button
Button(action: {
    // Action
}) {
    Image(systemName: "plus")
        .font(.system(size: 24))
        .foregroundColor(.signalMint)
}
.frame(width: 48, height: 48)
.background(Color.signalNeutral800)
.cornerRadius(SignalRadius.full)
.shadow(color: Color.signalMint.opacity(0.3), radius: 3, y: 2)

// Edit Button
Button(action: {
    // Action
}) {
    Image(systemName: "pencil")
        .font(.system(size: 24))
        .foregroundColor(.signalMint)
}
.frame(width: 48, height: 48)
.background(Color.signalNeutral800)
.cornerRadius(SignalRadius.full)
.shadow(color: Color.signalMint.opacity(0.3), radius: 3, y: 2)

// Function Toggle
Button(action: {
    // Action
}) {
    Image(systemName: "switch.2")
        .font(.system(size: 24))
        .foregroundColor(.signalMint)
}
.frame(width: 48, height: 48)
.background(Color.signalNeutral800)
.cornerRadius(SignalRadius.full)
.shadow(color: Color.signalMint.opacity(0.3), radius: 3, y: 2)

// Delete Button
Button(action: {
    // Action
}) {
    Image(systemName: "trash")
        .font(.system(size: 24))
        .foregroundColor(.signalError)
}
.frame(width: 48, height: 48)
.background(Color.signalNeutral800)
.cornerRadius(SignalRadius.full)
.shadow(color: Color.signalError.opacity(0.3), radius: 3, y: 2)
```

### Text Inputs

Signal Cab uses **two input patterns** depending on context: **Independent Inputs** for search and standalone forms, and **Table View Inputs** for settings and data entry screens.

#### Pattern 1: Independent Inputs (Search & Modals)

**Design Philosophy**

Independent inputs use **prominent borders and neon glows** to communicate state. They're designed to stand alone with clear visual hierarchy—labels above, large touch targets, and dramatic focus states.

**Best For:** Search bars, modal dialogs, standalone forms where the input needs maximum visibility.

**States:**
- **Default:** Dark background (#111827), 1px subtle border (#1f2937)
- **Focused:** 2px neon mint border (#00ffaa), outer glow (4pt radius, 10% opacity)
- **Filled:** 1px brighter border (#374151) when content present
- **Error:** 2px red border (#ef4444), red glow, helper text with icon

**Typography:**
- Labels: 14pt semibold, #9ca3af
- Input text: 14pt regular, #f3f4f6
- Placeholder: 14pt regular, #6b7280

**Example: Search Input**

```swift
@State private var searchQuery: String = ""
@FocusState private var isSearchFocused: Bool

VStack(alignment: .leading, spacing: 8) {
    Text("Search Library")
        .font(.system(size: 14, weight: .semibold))
        .foregroundColor(Color(hex: "#9ca3af"))
    
    HStack(spacing: 12) {
        Image(systemName: "magnifyingglass")
            .font(.system(size: 16))
            .foregroundColor(Color(hex: "#6b7280"))
        
        TextField("Search by name or address...", text: $searchQuery)
            .font(.system(size: 14))
            .foregroundColor(Color(hex: "#f3f4f6"))
            .focused($isSearchFocused)
        
        if !searchQuery.isEmpty {
            Button(action: { searchQuery = "" }) {
                Image(systemName: "xmark.circle.fill")
                    .font(.system(size: 16))
                    .foregroundColor(Color(hex: "#6b7280"))
            }
        }
    }
    .padding(.horizontal, 16)
    .padding(.vertical, 12)
    .background(Color(hex: "#111827"))
    .overlay(
        RoundedRectangle(cornerRadius: 12)
            .stroke(
                isSearchFocused ? Color(hex: "#00ffaa") : Color(hex: "#1f2937"),
                lineWidth: isSearchFocused ? 2 : 1
            )
    )
    .cornerRadius(12)
    .shadow(
        color: isSearchFocused ? Color(hex: "#00ffaa").opacity(0.1) : .clear,
        radius: 4
    )
}
```

#### Pattern 2: Table View Inputs (Settings & Data Entry)

**Design Philosophy**

Table view inputs follow the **iOS native pattern**: label on the left, input on the right, with a subtle bottom border that highlights in mint when focused. This pattern is compact, familiar to iOS users, and perfect for forms with multiple fields.

**Best For:** Settings screens, locomotive configuration, any form with multiple related fields.

**Anatomy:**
- **Label:** Left-aligned, 14pt medium weight, #9ca3af, fixed width (~120-140pt)
- **Input:** Right-aligned, 14pt regular, #f3f4f6, flexible width
- **Container:** Dark background (#111827), grouped in rounded container
- **Dividers:** Subtle borders between rows (#1f2937 at 50% opacity)
- **Focus Indicator:** 2px mint line at bottom of focused row

**Typography:**
- Labels: 14pt medium, #9ca3af (consistent gray)
- Input text: 14pt regular, #f3f4f6 (white)
- Placeholder: 14pt regular, #6b7280 (medium gray)
- Numbers: Use tabular (monospace) for addresses and IDs

**Key Features:**
- Right-aligned input text (iOS convention)
- Mint bottom border on focus (subtle but clear)
- Inline error messages below field when needed
- Minimal visual weight when not focused
- Seamless row-to-row navigation

**Example: Locomotive Configuration Form**

```swift
@State private var locomotiveName: String = "Union Pacific 844"
@State private var dccAddress: String = "844"
@State private var functionMap: String = "13"
@State private var manufacturer: String = ""
@State private var focusedField: String? = nil
@State private var addressError: String? = nil

VStack(spacing: 0) {
    // Name Row
    VStack(spacing: 0) {
        HStack {
            Text("Name")
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(Color(hex: "#9ca3af"))
                .frame(width: 120, alignment: .leading)
            
            TextField("Enter name", text: $locomotiveName)
                .font(.system(size: 14))
                .foregroundColor(Color(hex: "#f3f4f6"))
                .multilineTextAlignment(.trailing)
                .onTapGesture { focusedField = "name" }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 14)
        .background(Color(hex: "#111827"))
        
        // Focus indicator
        if focusedField == "name" {
            Rectangle()
                .fill(Color(hex: "#00ffaa"))
                .frame(height: 2)
        }
        
        // Row divider
        if focusedField != "name" {
            Divider()
                .background(Color(hex: "#1f2937").opacity(0.5))
        }
    }
    
    // DCC Address Row
    VStack(spacing: 0) {
        HStack {
            Text("DCC Address")
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(Color(hex: "#9ca3af"))
                .frame(width: 120, alignment: .leading)
            
            TextField("1-9999", text: $dccAddress)
                .font(.system(size: 14, design: .monospaced))
                .foregroundColor(Color(hex: "#f3f4f6"))
                .multilineTextAlignment(.trailing)
                .keyboardType(.numberPad)
                .onTapGesture { focusedField = "address" }
                .onChange(of: dccAddress) { newValue in
                    // Validate
                    if let intValue = Int(newValue), intValue >= 1 && intValue <= 9999 {
                        addressError = nil
                    } else if !newValue.isEmpty {
                        addressError = "Must be 1-9999"
                    }
                }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 14)
        .background(Color(hex: "#111827"))
        
        // Focus indicator or error
        if focusedField == "address" && addressError == nil {
            Rectangle()
                .fill(Color(hex: "#00ffaa"))
                .frame(height: 2)
        } else if let error = addressError, focusedField != "address" {
            HStack {
                Image(systemName: "exclamationmark.circle")
                    .font(.system(size: 12))
                Text(error)
                    .font(.system(size: 12))
                Spacer()
            }
            .foregroundColor(Color(hex: "#ef4444"))
            .padding(.horizontal, 16)
            .padding(.vertical, 8)
            .background(Color(hex: "#ef4444").opacity(0.1))
        }
        
        // Row divider
        if focusedField != "address" && addressError == nil {
            Divider()
                .background(Color(hex: "#1f2937").opacity(0.5))
        }
    }
    
    // Function Map Row
    VStack(spacing: 0) {
        HStack {
            Text("Function Map")
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(Color(hex: "#9ca3af"))
                .frame(width: 120, alignment: .leading)
            
            TextField("Map #", text: $functionMap)
                .font(.system(size: 14, design: .monospaced))
                .foregroundColor(Color(hex: "#f3f4f6"))
                .multilineTextAlignment(.trailing)
                .keyboardType(.numberPad)
                .onTapGesture { focusedField = "function" }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 14)
        .background(Color(hex: "#111827"))
        
        if focusedField == "function" {
            Rectangle()
                .fill(Color(hex: "#00ffaa"))
                .frame(height: 2)
        }
        
        if focusedField != "function" {
            Divider()
                .background(Color(hex: "#1f2937").opacity(0.5))
        }
    }
    
    // Manufacturer Row (optional field)
    VStack(spacing: 0) {
        HStack {
            Text("Manufacturer")
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(Color(hex: "#9ca3af"))
                .frame(width: 120, alignment: .leading)
            
            TextField("Optional", text: $manufacturer)
                .font(.system(size: 14))
                .foregroundColor(Color(hex: "#f3f4f6"))
                .multilineTextAlignment(.trailing)
                .onTapGesture { focusedField = "manufacturer" }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 14)
        .background(Color(hex: "#111827"))
        
        if focusedField == "manufacturer" {
            Rectangle()
                .fill(Color(hex: "#00ffaa"))
                .frame(height: 2)
        }
    }
}
.background(Color(hex: "#111827"))
.cornerRadius(12)
.overlay(
    RoundedRectangle(cornerRadius: 12)
        .stroke(Color(hex: "#1f2937"), lineWidth: 1)
)
```

**Table View Input Guidelines:**

1. **Grouping:** Wrap related fields in one rounded container
2. **Label Width:** Keep labels 120-140pt for consistency
3. **Alignment:** Right-align input text (iOS pattern)
4. **Numbers:** Use monospace font for addresses, IDs, technical values
5. **Focus:** Show mint bottom border, hide row divider
6. **Validation:** Inline error messages below field, red tinted background
7. **Optional Fields:** Use "Optional" placeholder to indicate non-required
8. **Spacing:** 14pt vertical padding per row for 44pt+ touch target

### Locomotive Cards

#### Design Philosophy

Locomotive cards are the **primary navigation element** in the library screen. Each card represents a locomotive and acts as a button to activate throttle control. The design emphasizes clear status indication: available locomotives have neutral styling, active locomotives glow with neon mint borders and pulsing indicators.

The left-side image area (64×64pt) accommodates user photos, colored fallbacks with initials, or a default locomotive icon—maintaining visual interest even without custom photos.

#### Card States

**Available State**
- **Border:** 1px subtle gray (#1f2937)
- **Status Badge:** "Available" in medium gray (#9ca3af) on dark gray background (#1f2937)
- **Chevron:** Dark gray (#4b5563)
- **Purpose:** Locomotive is idle, ready to activate
- **Interaction:** Tap card to navigate to throttle and activate

**Active State**
- **Border:** 2px neon mint (#00ffaa)
- **Glow:** Outer shadow, 4pt radius, mint at 10% opacity
- **Status Badge:** "Active • 42%" in mint (#00ffaa) on mint-tinted background (#00ffaa20)
- **Indicator:** 8pt pulsing mint circle next to name
- **Chevron:** Neon mint (#00ffaa)
- **Purpose:** Locomotive is currently controlled, shows real-time speed percentage

#### Card Anatomy (Left to Right)

**Image Area (64×64pt)**
- Square with 12pt corner radius
- Priority: 1) User photo, 2) Colored fallback with initials, 3) Default icon
- Default icon: train.side.front.car on blue-tinted background (#5b8aff at 20% opacity)
- Colored fallbacks use gradient (color → color at 70% opacity)

**Info Section**
- **Name:** 16pt semibold, white (#f9fafb), 1 line truncated
- **Address:** "# 5038" in 12pt monospace, medium gray (#6b7280)
- **Function Map:** "ƒM 13" in 12pt monospace, same gray
- **Status Badge:** Rounded pill, color varies by state

**Edit Button**
- Size: 36×36pt square
- Icon: slider.horizontal.3 (SF Symbol) in medium gray (#9ca3af)
- Background: Gray (#1f2937) with subtle border (#374151)
- Corner radius: 8pt
- Tapping opens configuration sheet without firing card tap

**Chevron**
- Size: 20×20pt
- Color: Changes based on state (gray when available, mint when active)

#### Interaction Model

- **Tap Card Body:** Navigate to throttle control screen. If locomotive is available, it becomes active. If already active, just navigate to its throttle.
- **Tap Edit Button:** Open configuration sheet (edit name, address, function mapping, upload photo). Sheet appears over current screen without navigation.
- **Pulsing Indicator:** 8pt circle animates with 1-second ease-in-out pulse (scale 1.0 → 1.2, opacity 1.0 → 0.5, repeat forever). Subtle enough not to distract, noticeable enough to indicate "live" status.
- **Speed Percentage:** Only shown when locomotive is active and moving. Updates in real-time as throttle changes. Format: "Active • 42%"

#### Locomotive Card Example

```swift
struct LocomotiveCard: View {
    let locomotive: Locomotive
    let onTap: () -> Void
    let onEdit: () -> Void
    @State private var isPulsing = false
    
    var body: some View {
        Button(action: onTap) {
            HStack(spacing: 16) {
                // Image Area
                locomotiveImage
                
                // Info Section
                VStack(alignment: .leading, spacing: 6) {
                    // Name + Active Indicator
                    HStack(spacing: 8) {
                        Text(locomotive.name)
                            .font(.system(size: 16, weight: .semibold))
                            .foregroundColor(Color(hex: "#f9fafb"))
                            .lineLimit(1)
                        
                        if locomotive.isActive {
                            Circle()
                                .fill(Color(hex: "#00ffaa"))
                                .frame(width: 8, height: 8)
                                .scaleEffect(isPulsing ? 1.2 : 1.0)
                                .opacity(isPulsing ? 0.5 : 1.0)
                                .animation(
                                    Animation.easeInOut(duration: 1.0).repeatForever(),
                                    value: isPulsing
                                )
                                .onAppear { isPulsing = true }
                        }
                    }
                    
                    // Address, Function Mapping, Status
                    HStack(spacing: 12) {
                        Text("# \(locomotive.address)")
                            .font(.system(size: 12, design: .monospaced))
                            .foregroundColor(Color(hex: "#6b7280"))
                        
                        Text("ƒM \(locomotive.functionMapping)")
                            .font(.system(size: 12, design: .monospaced))
                            .foregroundColor(Color(hex: "#6b7280"))
                        
                        statusBadge
                    }
                }
                
                Spacer()
                
                // Edit Button
                Button(action: onEdit) {
                    Image(systemName: "slider.horizontal.3")
                        .font(.system(size: 16))
                        .foregroundColor(Color(hex: "#9ca3af"))
                        .frame(width: 36, height: 36)
                        .background(Color(hex: "#1f2937"))
                        .overlay(
                            RoundedRectangle(cornerRadius: 8)
                                .stroke(Color(hex: "#374151"), lineWidth: 1)
                        )
                        .cornerRadius(8)
                }
                .buttonStyle(PlainButtonStyle())
                
                // Chevron
                Image(systemName: "chevron.right")
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundColor(
                        locomotive.isActive ? Color(hex: "#00ffaa") : Color(hex: "#4b5563")
                    )
            }
            .padding(16)
            .background(Color(hex: "#111827"))
            .overlay(
                RoundedRectangle(cornerRadius: 12)
                    .stroke(
                        locomotive.isActive ? Color(hex: "#00ffaa") : Color(hex: "#1f2937"),
                        lineWidth: locomotive.isActive ? 2 : 1
                    )
            )
            .cornerRadius(12)
            .shadow(
                color: locomotive.isActive ? Color(hex: "#00ffaa").opacity(0.1) : .clear,
                radius: 4
            )
        }
        .buttonStyle(PlainButtonStyle())
    }
    
    private var locomotiveImage: some View {
        ZStack {
            if let imageData = locomotive.imageData, let uiImage = UIImage(data: imageData) {
                // User photo
                Image(uiImage: uiImage)
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .frame(width: 64, height: 64)
                    .clipShape(RoundedRectangle(cornerRadius: 12))
                    .overlay(
                        RoundedRectangle(cornerRadius: 12)
                            .stroke(Color(hex: "#4b5563"), lineWidth: 1)
                    )
            } else if let fallbackColor = locomotive.fallbackColor {
                // Colored fallback with initials
                RoundedRectangle(cornerRadius: 12)
                    .fill(
                        LinearGradient(
                            colors: [fallbackColor, fallbackColor.opacity(0.7)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(width: 64, height: 64)
                    .overlay(
                        Text(getInitials(from: locomotive.name))
                            .font(.system(size: 14, weight: .bold))
                            .foregroundColor(.white)
                    )
            } else {
                // Default icon
                RoundedRectangle(cornerRadius: 12)
                    .fill(Color(hex: "#5b8aff").opacity(0.2))
                    .frame(width: 64, height: 64)
                    .overlay(
                        Image(systemName: "train.side.front.car")
                            .font(.system(size: 28))
                            .foregroundColor(Color(hex: "#5b8aff"))
                    )
            }
        }
    }
    
    private var statusBadge: some View {
        Group {
            if locomotive.isActive, let speed = locomotive.speedPercentage {
                Text("Active • \(speed)%")
                    .font(.system(size: 12, weight: .semibold))
                    .foregroundColor(Color(hex: "#00ffaa"))
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(Color(hex: "#00ffaa").opacity(0.12))
                    .cornerRadius(12)
            } else {
                Text("Available")
                    .font(.system(size: 12, weight: .medium))
                    .foregroundColor(Color(hex: "#9ca3af"))
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(Color(hex: "#1f2937"))
                    .cornerRadius(12)
            }
        }
    }
    
    private func getInitials(from name: String) -> String {
        let components = name.split(separator: " ")
        if components.count >= 2 {
            return String(components[0].prefix(1)) + String(components[1].prefix(1))
        } else if let first = components.first {
            return String(first.prefix(2))
        }
        return "?"
    }
}

// Locomotive model
struct Locomotive: Identifiable {
    let id: UUID
    let name: String
    let address: Int
    let functionMapping: Int
    let isActive: Bool
    let speedPercentage: Int?
    let imageData: Data?
    let fallbackColor: Color?
}
```

### Card Component

```swift
VStack(alignment: .leading, spacing: SignalSpacing.base) {
    // Header
    HStack {
        Text("Union Pacific 844")
            .font(SignalTypography.h3)
            .foregroundColor(.signalNeutral100)
        
        Spacer()
        
        Text("Active")
            .font(SignalTypography.caption)
            .foregroundColor(.signalNeutral950)
            .padding(.horizontal, SignalSpacing.sm)
            .padding(.vertical, SignalSpacing.xs)
            .background(Color.signalMint)
            .cornerRadius(SignalRadius.sm)
    }
    
    // Content
    Text("Steam Locomotive • Address: 844")
        .font(SignalTypography.bodySmall)
        .foregroundColor(.signalNeutral500)
    
    // Metadata
    HStack(spacing: SignalSpacing.sm) {
        Label("Speed: 45", systemImage: "speedometer")
        Spacer()
        Label("Forward", systemImage: "arrow.forward")
    }
    .font(SignalTypography.caption)
    .foregroundColor(.signalNeutral400)
}
.padding(SignalSpacing.md)
.frame(maxWidth: .infinity)
.background(Color.signalNeutral900)
.cornerRadius(SignalRadius.lg)
.signalShadowRaised()
```

### App Background

```swift
struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                // Your content
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .background(LinearGradient.appBackground)
        }
    }
}
```

---

## Throttle Control Component

Here's a basic implementation of the Cool to Warm gradient throttle:

```swift
struct ThrottleControl: View {
    @State private var throttleValue: Double = 0  // 0-100
    
    var body: some View {
        GeometryReader { geometry in
            let trackHeight: CGFloat = 280
            let thumbSize: CGFloat = 48
            let trackWidth: CGFloat = 48
            
            ZStack(alignment: .bottom) {
                // Track background
                RoundedRectangle(cornerRadius: SignalRadius.full)
                    .fill(Color.signalNeutral900)
                    .frame(width: trackWidth, height: trackHeight)
                    .overlay(
                        RoundedRectangle(cornerRadius: SignalRadius.full)
                            .stroke(Color.signalNeutral800, lineWidth: 1)
                    )
                
                // Fill gradient
                RoundedRectangle(cornerRadius: SignalRadius.full)
                    .fill(throttleGradient)
                    .frame(
                        width: trackWidth - 16,
                        height: max(0, (trackHeight - 16) * CGFloat(throttleValue / 100))
                    )
                    .shadow(color: glowColor, radius: 20)
                    .padding(.bottom, 8)
                    .padding(.horizontal, 8)
                
                // Thumb
                ZStack {
                    Circle()
                        .fill(thumbColor)
                        .frame(width: thumbSize, height: thumbSize)
                        .shadow(color: thumbColor.opacity(0.5), radius: 16, y: 6)
                        .overlay(
                            Circle()
                                .stroke(thumbBorderColor, lineWidth: 2)
                        )
                    
                    Text("\(Int(throttleValue))")
                        .font(SignalTypography.caption)
                        .fontWeight(.bold)
                        .foregroundColor(thumbTextColor)
                }
                .offset(y: -((trackHeight - thumbSize) * CGFloat(throttleValue / 100)))
                .gesture(
                    DragGesture(minimumDistance: 0)
                        .onChanged { value in
                            let newValue = 100 - (value.location.y / trackHeight * 100)
                            throttleValue = max(0, min(100, newValue))
                        }
                )
            }
            .frame(width: trackWidth, height: trackHeight)
        }
        .frame(width: 48, height: 280)
    }
    
    // Dynamic colors based on throttle value
    private var throttleGradient: LinearGradient {
        if throttleValue <= 50 {
            return LinearGradient.throttleCoolWarm50
        } else {
            return LinearGradient.throttleCoolWarm100
        }
    }
    
    private var thumbColor: Color {
        if throttleValue == 0 {
            return Color.signalNeutral800
        } else if throttleValue <= 50 {
            return Color.signalMint
        } else {
            return Color.signalPurple
        }
    }
    
    private var thumbBorderColor: Color {
        if throttleValue == 0 {
            return Color.signalNeutral700
        } else if throttleValue <= 50 {
            return Color.signalMintDark
        } else {
            return Color.signalPurpleDark
        }
    }
    
    private var thumbTextColor: Color {
        throttleValue == 0 ? Color.signalNeutral500 : Color.signalNeutral950
    }
    
    private var glowColor: Color {
        if throttleValue == 0 {
            return Color.clear
        } else if throttleValue <= 50 {
            return Color.signalMint.opacity(0.4)
        } else {
            return Color.signalPurple.opacity(0.6)
        }
    }
}
```

---

## App Icons

We have **12 app icon variations** ready for implementation. Each is documented in `SignalAppIcons.variations`.

### Recommended Primary Icon: "Cyan Moonlight"
- Cool blue-green palette
- Balanced and accessible
- Strong brand recognition with mint signal

### Generating Icons:

1. Use the `SignalAppIcons.variations` array to get color specifications
2. Create 1024×1024pt assets for each variation
3. Export with transparency (iOS applies corner radius automatically)
4. Add to Asset Catalog with `AppIcon` naming

**Icon Structure:**
- Gradient background (top to bottom)
- Optional moon/glow element
- Three layered "hills" with varying opacity
- Signal Cab icon mark in center (neon mint)

---

## Design Principles (iOS-Specific)

### 1. Touch Targets
- Minimum 44×44pt for all interactive elements
- Use `SignalSpacing.minTouchTarget` constant
- Add invisible tap areas if visual element is smaller

### 2. Safe Areas
- Respect iOS safe areas (notch, home indicator)
- Use `SignalSpacing.safeAreaPadding` for edges
- Test on iPhone SE, standard, and Pro Max sizes

### 3. Haptic Feedback
Add haptics to key interactions:

```swift
import CoreHaptics

// Light tap for button press
UIImpactFeedbackGenerator(style: .light).impactOccurred()

// Medium for mode changes
UIImpactFeedbackGenerator(style: .medium).impactOccurred()

// Heavy for emergency stop
UIImpactFeedbackGenerator(style: .heavy).impactOccurred()

// Selection change (throttle detents)
UISelectionFeedbackGenerator().selectionChanged()

// Success notification
UINotificationFeedbackGenerator().notificationOccurred(.success)

// Error notification
UINotificationFeedbackGenerator().notificationOccurred(.error)
```

### 4. Dark Mode Only
Signal Cab is designed **exclusively for dark mode**:

```swift
// In Info.plist
<key>UIUserInterfaceStyle</key>
<string>Dark</string>
```

### 5. Animations

Use smooth, physics-based animations:

```swift
// Standard timing
.animation(.easeInOut(duration: 0.3), value: someValue)

// Springy for throttle/sliders
.animation(.spring(response: 0.4, dampingFraction: 0.7), value: throttleValue)

// Quick for button press
.animation(.easeOut(duration: 0.15), value: isPressed)
```

---

## Navigation Structure

Recommended iOS app structure:

```swift
TabView {
    LocomotiveListView()
        .tabItem {
            Label("Locomotives", systemImage: "train.side.front.car")
        }
    
    ThrottleView()
        .tabItem {
            Label("Throttle", systemImage: "dial.medium")
        }
    
    FunctionsView()
        .tabItem {
            Label("Functions", systemImage: "switch.2")
        }
    
    SettingsView()
        .tabItem {
            Label("Settings", systemImage: "gearshape")
        }
}
.accentColor(.signalMint)
```

---

## Accessibility

### Color Contrast
All colors meet **WCAG AA** standards against dark backgrounds:
- Neon Mint on dark: 7.2:1 ratio
- Cyan on dark: 6.8:1 ratio
- Purple on dark: 5.1:1 ratio

### VoiceOver Labels

```swift
Button("Start") { }
    .accessibilityLabel("Start locomotive")
    .accessibilityHint("Begins locomotive movement at current throttle setting")

ThrottleControl()
    .accessibilityLabel("Throttle")
    .accessibilityValue("\(Int(throttleValue)) percent")
    .accessibilityAdjustableAction { direction in
        switch direction {
        case .increment: throttleValue = min(100, throttleValue + 5)
        case .decrement: throttleValue = max(0, throttleValue - 5)
        @unknown default: break
        }
    }
```

### Dynamic Type

Support Dynamic Type for accessibility:

```swift
Text("Locomotive")
    .font(SignalTypography.h2)
    .dynamicTypeSize(...DynamicTypeSize.xxxLarge)  // Cap at xxxLarge to prevent layout breaking
```

---

## Common Patterns

### Loading State

```swift
ProgressView()
    .progressViewStyle(CircularProgressViewStyle(tint: .signalMint))
    .scaleEffect(1.5)
```

### Empty State

```swift
VStack(spacing: SignalSpacing.lg) {
    Image(systemName: "train.side.front.car")
        .font(.system(size: 64))
        .foregroundColor(.signalNeutral700)
    
    Text("No Locomotives")
        .font(SignalTypography.h2)
        .foregroundColor(.signalNeutral300)
    
    Text("Add a locomotive to get started")
        .font(SignalTypography.body)
        .foregroundColor(.signalNeutral500)
    
    Button("Add Locomotive") { }
        .font(SignalTypography.body)
        .foregroundColor(.signalNeutral950)
        .padding(.horizontal, SignalSpacing.md)
        .padding(.vertical, SignalSpacing.base)
        .background(Color.signalMint)
        .cornerRadius(SignalRadius.base)
}
```

### Error State

```swift
HStack(spacing: SignalSpacing.sm) {
    Image(systemName: "exclamationmark.triangle.fill")
    Text("Connection lost")
}
.font(SignalTypography.bodySmall)
.foregroundColor(.signalError)
.padding(SignalSpacing.base)
.background(Color.signalError.opacity(0.1))
.cornerRadius(SignalRadius.sm)
.overlay(
    RoundedRectangle(cornerRadius: SignalRadius.sm)
        .stroke(Color.signalError.opacity(0.3), lineWidth: 1)
)
```

---

## Testing Checklist

- [ ] All custom fonts load correctly
- [ ] Colors appear correctly on physical device
- [ ] Touch targets are minimum 44×44pt
- [ ] Safe areas respected on all device sizes
- [ ] Haptic feedback works on supported devices
- [ ] VoiceOver labels are clear and helpful
- [ ] App icons exported at all required sizes
- [ ] Dark mode enforced
- [ ] Gradients render smoothly without banding

---

## Support

For questions or issues implementing this design system:
- Reference the web design system at `/design-system`
- Check component examples in `/playground`
- Review the design principles at the top of `SignalCabDesignTokens.swift`

**Version:** 1.0  
**Design System:** Tech Industrial  
**Platform:** iOS 15.0+  
**Framework:** SwiftUI